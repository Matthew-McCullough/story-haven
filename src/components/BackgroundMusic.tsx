'use client'

import { useState, useEffect, useRef } from 'react'

interface BackgroundMusicProps {
  volume?: number
}

export default function BackgroundMusic({ volume = 0.15 }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)

  // Generate a soft classical-lofi music buffer
  const generateBackgroundMusic = (audioContext: AudioContext): AudioBuffer => {
    const sampleRate = audioContext.sampleRate
    const duration = 60 // 60 seconds loop
    const length = sampleRate * duration
    
    const buffer = audioContext.createBuffer(2, length, sampleRate)
    const leftChannel = buffer.getChannelData(0)
    const rightChannel = buffer.getChannelData(1)

    // Generate soft classical-lofi ambient music
    for (let i = 0; i < length; i++) {
      const time = i / sampleRate
      
      // Base harmonic progression (classical inspired)
      const bass = Math.sin(2 * Math.PI * 65 * time) * 0.1 // C2 bass note
      const chord1 = Math.sin(2 * Math.PI * 130 * time) * 0.08 // C3
      const chord2 = Math.sin(2 * Math.PI * 196 * time) * 0.06 // G3
      const chord3 = Math.sin(2 * Math.PI * 260 * time) * 0.05 // C4
      
      // Soft melody (lofi style)
      const melody1 = Math.sin(2 * Math.PI * 392 * time + Math.sin(time * 0.5)) * 0.04 // G4 with vibrato
      const melody2 = Math.sin(2 * Math.PI * 523 * time + Math.sin(time * 0.3)) * 0.03 // C5 with vibrato
      
      // Ambient pad (atmospheric)
      const pad1 = Math.sin(2 * Math.PI * 330 * time + Math.sin(time * 0.2)) * 0.02 // E4
      const pad2 = Math.sin(2 * Math.PI * 440 * time + Math.sin(time * 0.1)) * 0.02 // A4
      
      // Soft percussion (lofi style)
      const kick = Math.random() * 0.02 * (Math.sin(time * 2) > 0.8 ? 1 : 0)
      const hihat = Math.random() * 0.01 * (Math.sin(time * 8) > 0.9 ? 1 : 0)
      
      // Combine all elements
      let leftSample = bass + chord1 + chord2 + melody1 + pad1 + kick
      let rightSample = bass + chord1 + chord3 + melody2 + pad2 + hihat
      
      // Apply soft filtering and lofi effects
      const lofiFilter = Math.sin(time * 0.1) * 0.1 + 1
      leftSample *= lofiFilter
      rightSample *= lofiFilter
      
      // Add gentle fade in/out for seamless loop
      const fadeLength = sampleRate * 2 // 2 second fade
      if (i < fadeLength) {
        const fadeFactor = i / fadeLength
        leftSample *= fadeFactor
        rightSample *= fadeFactor
      } else if (i > length - fadeLength) {
        const fadeFactor = (length - i) / fadeLength
        leftSample *= fadeFactor
        rightSample *= fadeFactor
      }
      
      leftChannel[i] = leftSample * 0.3 // Overall volume reduction
      rightChannel[i] = rightSample * 0.3
    }

    return buffer
  }

  const initializeAudio = async () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const audioContext = audioContextRef.current

      if (audioContext.state === 'suspended') {
        await audioContext.resume()
      }

      if (!audioBufferRef.current) {
        audioBufferRef.current = generateBackgroundMusic(audioContext)
      }

      // Create gain node for volume control
      if (!gainNodeRef.current) {
        gainNodeRef.current = audioContext.createGain()
        gainNodeRef.current.connect(audioContext.destination)
        gainNodeRef.current.gain.setValueAtTime(volume, audioContext.currentTime)
      }

      setIsLoaded(true)
    } catch (error) {
      console.error('Failed to initialize background music:', error)
    }
  }

  const startMusic = async () => {
    if (!userInteracted || !audioContextRef.current || !audioBufferRef.current || !gainNodeRef.current) {
      return
    }

    try {
      // Stop any existing source
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop()
      }

      // Create new source
      sourceNodeRef.current = audioContextRef.current.createBufferSource()
      sourceNodeRef.current.buffer = audioBufferRef.current
      sourceNodeRef.current.loop = true
      sourceNodeRef.current.connect(gainNodeRef.current)
      sourceNodeRef.current.start()
      
      setIsPlaying(true)
    } catch (error) {
      console.error('Failed to start background music:', error)
    }
  }

  const stopMusic = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop()
      sourceNodeRef.current = null
      setIsPlaying(false)
    }
  }

  const toggleMusic = async () => {
    if (!userInteracted) {
      setUserInteracted(true)
      await initializeAudio()
    }

    if (isPlaying) {
      stopMusic()
    } else {
      await startMusic()
    }
  }

  // Update volume when prop changes
  useEffect(() => {
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioContextRef.current.currentTime)
    }
  }, [volume])

  // Auto-start music after user interaction
  useEffect(() => {
    if (userInteracted && isLoaded && !isPlaying) {
      startMusic()
    }
  }, [userInteracted, isLoaded])

  // Handle page visibility change to pause/resume music
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        stopMusic()
      } else if (!document.hidden && userInteracted && isLoaded) {
        startMusic()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [isPlaying, userInteracted, isLoaded])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="bg-amber-800 bg-opacity-70 text-amber-100 p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 backdrop-blur-sm border border-amber-600"
        title={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      >
        {isPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
      {userInteracted && (
        <div className="absolute -top-8 right-0 text-xs text-amber-200 opacity-70">
          {!isLoaded ? 'Loading...' : isPlaying ? 'Playing' : 'Paused'}
        </div>
      )}
    </div>
  )
}