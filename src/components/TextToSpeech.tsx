'use client'

import { useState, useEffect, useRef } from 'react'
import { VoiceSettings } from '@/types/story'

interface TextToSpeechProps {
  text: string
  className?: string
}

export default function TextToSpeech({ text, className = '' }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>({
    gender: 'female',
    rate: 1,
    pitch: 1,
    volume: 0.8
  })
  const [, setCurrentPosition] = useState(0)
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      speechSynthesisRef.current = window.speechSynthesis
      
      const loadVoices = () => {
        const availableVoices = speechSynthesisRef.current?.getVoices() || []
        setVoices(availableVoices)
      }

      loadVoices()
      speechSynthesisRef.current?.addEventListener('voiceschanged', loadVoices)

      return () => {
        speechSynthesisRef.current?.removeEventListener('voiceschanged', loadVoices)
        if (utteranceRef.current) {
          speechSynthesisRef.current?.cancel()
        }
      }
    }
  }, [])

  const getPreferredVoice = (genderPreference: 'male' | 'female') => {
    const genderKeywords = genderPreference === 'male' 
      ? ['male', 'man', 'david', 'alex', 'daniel', 'fred', 'jorge', 'tom']
      : ['female', 'woman', 'karen', 'moira', 'samantha', 'tessa', 'victoria', 'zoe', 'allison', 'ava']
    
    // First try to find a voice with gender-specific keywords
    let preferredVoice = voices.find(voice => 
      genderKeywords.some(keyword => 
        voice.name.toLowerCase().includes(keyword)
      )
    )

    // If not found, use default system voice
    if (!preferredVoice) {
      preferredVoice = voices.find(voice => voice.default) || voices[0]
    }

    return preferredVoice
  }

  const speak = () => {
    if (!speechSynthesisRef.current) return

    if (isPaused) {
      speechSynthesisRef.current.resume()
      setIsPaused(false)
      setIsPlaying(true)
      return
    }

    // Cancel any existing speech
    speechSynthesisRef.current.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    const selectedVoice = getPreferredVoice(voiceSettings.gender)
    
    if (selectedVoice) {
      utterance.voice = selectedVoice
    }
    
    utterance.rate = voiceSettings.rate
    utterance.pitch = voiceSettings.pitch
    utterance.volume = voiceSettings.volume

    utterance.onstart = () => {
      setIsPlaying(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsPlaying(false)
      setIsPaused(false)
      setCurrentPosition(0)
    }

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error)
      setIsPlaying(false)
      setIsPaused(false)
    }

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        setCurrentPosition(event.charIndex)
      }
    }

    utteranceRef.current = utterance
    speechSynthesisRef.current.speak(utterance)
  }

  const pause = () => {
    if (speechSynthesisRef.current && isPlaying) {
      speechSynthesisRef.current.pause()
      setIsPlaying(false)
      setIsPaused(true)
    }
  }

  const stop = () => {
    if (speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel()
      setIsPlaying(false)
      setIsPaused(false)
      setCurrentPosition(0)
    }
  }

  const handleVoiceSettingChange = (setting: keyof VoiceSettings, value: string | number) => {
    setVoiceSettings(prev => ({ ...prev, [setting]: value }))
  }

  return (
    <div className={`bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300 shadow-lg ${className}`} style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
      <div className="mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-amber-800 to-yellow-800 bg-clip-text text-transparent mb-4">🎤 Enchanted Audio Controls</h3>
        
        {/* Voice Gender Selection */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-amber-800 mb-3">
            🗣️ Narrator Voice
          </label>
          <div className="space-y-2">
            <label className="flex items-center p-3 rounded-lg bg-white/70 border-2 border-amber-300 hover:bg-white/90 transition-all duration-200 cursor-pointer">
              <input
                type="radio"
                name="voiceGender"
                value="female"
                checked={voiceSettings.gender === 'female'}
                onChange={(e) => handleVoiceSettingChange('gender', e.target.value)}
                className="mr-3 text-amber-500"
              />
              <span className="text-sm font-medium text-amber-800">👸 Female Voice</span>
            </label>
            <label className="flex items-center p-3 rounded-lg bg-white/70 border-2 border-amber-300 hover:bg-white/90 transition-all duration-200 cursor-pointer">
              <input
                type="radio"
                name="voiceGender"
                value="male"
                checked={voiceSettings.gender === 'male'}
                onChange={(e) => handleVoiceSettingChange('gender', e.target.value)}
                className="mr-3 text-amber-500"
              />
              <span className="text-sm font-medium text-amber-800">🤴 Male Voice</span>
            </label>
          </div>
        </div>

        {/* Speed Control */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-amber-800 mb-2">
            ⚡ Reading Speed: {voiceSettings.rate.toFixed(1)}x
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={voiceSettings.rate}
            onChange={(e) => handleVoiceSettingChange('rate', parseFloat(e.target.value))}
            className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer slider-thumb"
          />
          <div className="flex justify-between text-xs text-amber-700 mt-1">
            <span>🐌 Slower</span>
            <span>🐰 Faster</span>
          </div>
        </div>

        {/* Pitch Control */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-purple-800 mb-2">
            🎵 Voice Pitch: {voiceSettings.pitch.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={voiceSettings.pitch}
            onChange={(e) => handleVoiceSettingChange('pitch', parseFloat(e.target.value))}
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb"
          />
          <div className="flex justify-between text-xs text-purple-600 mt-1">
            <span>🎶 Lower</span>
            <span>🎼 Higher</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-purple-800 mb-2">
            🔊 Volume: {Math.round(voiceSettings.volume * 100)}%
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={voiceSettings.volume}
            onChange={(e) => handleVoiceSettingChange('volume', parseFloat(e.target.value))}
            className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider-thumb"
          />
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex space-x-3">
        <button
          onClick={speak}
          disabled={isPlaying && !isPaused}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          {isPaused ? '▶️ Resume' : '▶️ Play'}
        </button>

        <button
          onClick={pause}
          disabled={!isPlaying}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          ⏸️ Pause
        </button>

        <button
          onClick={stop}
          disabled={!isPlaying && !isPaused}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform transition-all duration-200 hover:scale-105 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
          </svg>
          ⏹️ Stop
        </button>
      </div>

      {/* Status */}
      {isPlaying && (
        <div className="mt-3 text-sm text-blue-600">
          <div className="flex items-center">
            <div className="animate-pulse w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            Now reading...
          </div>
        </div>
      )}
      
      {isPaused && (
        <div className="mt-3 text-sm text-yellow-600">
          Reading paused - click Resume to continue
        </div>
      )}
    </div>
  )
}