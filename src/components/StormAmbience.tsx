'use client'

import { useEffect, useState } from 'react'

export default function StormAmbience() {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Create thunder sound using Web Audio API
    const createThunderSound = () => {
      if (!audioContext) return

      // Create a more realistic thunder sound
      const bufferSize = audioContext.sampleRate * 3 // 3 seconds
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
      const data = buffer.getChannelData(0)

      // Generate thunder-like noise
      for (let i = 0; i < bufferSize; i++) {
        const envelope = Math.exp(-i / (audioContext.sampleRate * 0.8)) // Decay envelope
        const noise = (Math.random() * 2 - 1) * envelope * 0.1 // Low volume
        
        // Add low frequency rumble
        const rumble = Math.sin(2 * Math.PI * 60 * i / audioContext.sampleRate) * envelope * 0.05
        
        data[i] = noise + rumble
      }

      const source = audioContext.createBufferSource()
      const gainNode = audioContext.createGain()
      
      source.buffer = buffer
      gainNode.gain.value = 0.03 // Very quiet
      
      source.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      source.start()
    }

    // Initialize audio context on user interaction
    const initAudio = async () => {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
        setAudioContext(ctx)
        
        if (ctx.state === 'suspended') {
          await ctx.resume()
        }
      } catch (error) {
        console.log('Audio not supported or blocked')
      }
    }

    // Start thunder sounds with lightning flashes
    const thunderInterval = setInterval(() => {
      if (audioContext && isPlaying) {
        createThunderSound()
      }
    }, 8000) // Every 8 seconds to match lightning

    // Initialize on first user interaction
    const handleFirstInteraction = () => {
      initAudio()
      setIsPlaying(true)
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
    }

    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('keydown', handleFirstInteraction)

    return () => {
      clearInterval(thunderInterval)
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
      if (audioContext) {
        audioContext.close()
      }
    }
  }, [audioContext, isPlaying])

  return null // This component doesn't render anything
}