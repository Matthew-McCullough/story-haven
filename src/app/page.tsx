'use client'

import { useState } from 'react'
import StoryFilter from '@/components/StoryFilter'
import StoryDisplay from '@/components/StoryDisplay'
import StormAmbience from '@/components/StormAmbience'
import BackgroundMusic from '@/components/BackgroundMusic'
import { Story, StoryFilters } from '@/types/story'
import { getStoriesByFilters } from '@/data/stories'

export default function Home() {
  const [currentFilters, setCurrentFilters] = useState<StoryFilters>({})
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null)
  
  const filteredStories = getStoriesByFilters(currentFilters)
  const selectedStory = selectedStoryId ? filteredStories.find((s: Story) => s.id === selectedStoryId) : null

  const handleFilterChange = (filters: StoryFilters) => {
    setCurrentFilters(filters)
    setSelectedStoryId(null) // Reset selected story when filters change
  }

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000428 0%, #004e92 30%, #2d1b4d 60%, #1a0d2e 80%, #0a0a0a 100%)'
      }}
    >
      {/* HD Scroll Background Images */}
      <div className="absolute inset-0">
        {/* Primary scroll background - New scroll3.jpg */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url('/new-parchment-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundBlendMode: 'normal',
            minHeight: '100vh',
            width: '100%'
          }}
        />
        {/* Secondary scroll overlay for texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/new-parchment-bg.jpg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundBlendMode: 'soft-light',
            minHeight: '100vh',
            width: '100%'
          }}
        />
        
        {/* Text Readability Enhancement Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/30 via-transparent to-indigo-900/30"></div>
        {/* Additional rich overlay for nighttime atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/15 via-transparent to-purple-900/20"></div>
        
        {/* Twinkling Stars */}
        <div className="absolute inset-0 opacity-80">
          {/* Top area stars */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-90 animate-pulse star-twinkle"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-blue-200 rounded-full opacity-70 animate-pulse star-twinkle"></div>
          <div className="absolute top-16 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-85 animate-pulse star-twinkle"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-200 rounded-full opacity-75 animate-pulse star-twinkle"></div>
          <div className="absolute top-8 left-1/2 w-2 h-2 bg-blue-100 rounded-full opacity-80 animate-pulse star-twinkle"></div>
          <div className="absolute top-28 left-3/4 w-1 h-1 bg-white rounded-full opacity-90 animate-pulse star-twinkle"></div>
          <div className="absolute top-14 right-1/4 w-1.5 h-1.5 bg-indigo-200 rounded-full opacity-70 animate-pulse star-twinkle"></div>
          <div className="absolute top-6 left-1/6 w-1 h-1 bg-white rounded-full opacity-85 animate-pulse star-twinkle"></div>
          <div className="absolute top-22 right-1/6 w-1 h-1 bg-blue-200 rounded-full opacity-75 animate-pulse star-twinkle"></div>
          <div className="absolute top-18 left-2/3 w-2 h-2 bg-white rounded-full opacity-95 animate-pulse star-twinkle"></div>
          
          {/* Middle area stars */}
          <div className="absolute top-40 left-12 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse star-twinkle"></div>
          <div className="absolute top-45 right-16 w-1.5 h-1.5 bg-purple-100 rounded-full opacity-75 animate-pulse star-twinkle"></div>
          <div className="absolute top-38 left-1/3 w-1 h-1 bg-blue-200 rounded-full opacity-85 animate-pulse star-twinkle"></div>
          <div className="absolute top-50 right-1/5 w-2 h-2 bg-white rounded-full opacity-90 animate-pulse star-twinkle"></div>
          <div className="absolute top-42 left-3/5 w-1 h-1 bg-indigo-100 rounded-full opacity-70 animate-pulse star-twinkle"></div>
          <div className="absolute top-48 left-4/5 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse star-twinkle"></div>
          <div className="absolute top-44 right-2/5 w-1 h-1 bg-blue-100 rounded-full opacity-75 animate-pulse star-twinkle"></div>
          <div className="absolute top-36 left-1/8 w-1 h-1 bg-purple-200 rounded-full opacity-85 animate-pulse star-twinkle"></div>
          <div className="absolute top-52 right-1/8 w-1 h-1 bg-white rounded-full opacity-90 animate-pulse star-twinkle"></div>
          <div className="absolute top-46 left-7/8 w-2 h-2 bg-blue-200 rounded-full opacity-80 animate-pulse star-twinkle"></div>
          
          {/* Additional scattered stars */}
          <div className="absolute top-12 left-1/3 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse star-twinkle"></div>
          <div className="absolute top-24 right-3/4 w-1 h-1 bg-indigo-200 rounded-full opacity-85 animate-pulse star-twinkle"></div>
          <div className="absolute top-30 left-5/6 w-1.5 h-1.5 bg-white rounded-full opacity-75 animate-pulse star-twinkle"></div>
          <div className="absolute top-26 right-2/3 w-1 h-1 bg-blue-100 rounded-full opacity-80 animate-pulse star-twinkle"></div>
          <div className="absolute top-34 left-1/5 w-1 h-1 bg-purple-100 rounded-full opacity-90 animate-pulse star-twinkle"></div>
          <div className="absolute top-54 right-3/5 w-1 h-1 bg-white rounded-full opacity-75 animate-pulse star-twinkle"></div>
          <div className="absolute top-58 left-2/5 w-2 h-2 bg-blue-200 rounded-full opacity-85 animate-pulse star-twinkle"></div>
          <div className="absolute top-56 right-4/5 w-1 h-1 bg-indigo-100 rounded-full opacity-70 animate-pulse star-twinkle"></div>
          <div className="absolute top-60 left-1/7 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse star-twinkle"></div>
          <div className="absolute top-62 right-1/7 w-1 h-1 bg-purple-200 rounded-full opacity-90 animate-pulse star-twinkle"></div>
        </div>
        
        {/* Enhanced Castle Silhouettes at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-amber-900/25 to-transparent">
          <div className="absolute bottom-0 left-1/4 w-16 h-24 bg-amber-800/40 transform rotate-3 stone-texture" style={{ animation: 'thunderRumble 12s infinite ease-in-out' }}></div>
          <div className="absolute bottom-0 left-1/3 w-20 h-32 bg-amber-800/40 stone-texture" style={{ animation: 'thunderRumble 15s infinite ease-in-out', animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 right-1/4 w-18 h-28 bg-amber-800/40 transform -rotate-2 stone-texture" style={{ animation: 'thunderRumble 10s infinite ease-in-out', animationDelay: '4s' }}></div>
          <div className="absolute bottom-0 right-1/6 w-14 h-20 bg-amber-800/40 stone-texture" style={{ animation: 'thunderRumble 8s infinite ease-in-out', animationDelay: '1s' }}></div>
          {/* Additional castle towers */}
          <div className="absolute bottom-0 left-1/6 w-12 h-18 bg-amber-800/35 stone-texture" style={{ animation: 'thunderRumble 11s infinite ease-in-out', animationDelay: '3s' }}></div>
          <div className="absolute bottom-0 right-1/3 w-15 h-22 bg-amber-800/35 transform rotate-1 stone-texture" style={{ animation: 'thunderRumble 13s infinite ease-in-out', animationDelay: '5s' }}></div>
        </div>
      </div>
      
      {/* Dark Storm Clouds */}
      <div className="castle-cloud castle-cloud-large" style={{ top: '5%', animationDelay: '0s' }}></div>
      <div className="castle-cloud castle-cloud-small" style={{ top: '8%', animationDelay: '10s' }}></div>
      <div className="castle-cloud castle-cloud-large" style={{ top: '3%', animationDelay: '20s' }}></div>
      <div className="castle-cloud castle-cloud-small" style={{ top: '12%', animationDelay: '15s' }}></div>
      <div className="castle-cloud castle-cloud-large" style={{ top: '7%', animationDelay: '25s' }}></div>
      <div className="castle-cloud castle-cloud-small" style={{ top: '15%', animationDelay: '35s' }}></div>
      
      {/* Torrential Rainfall */}
      <div className="absolute inset-0 overflow-hidden z-5">
        {Array.from({ length: 150 }, (_, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.3 + Math.random() * 0.4}s`
            }}
          />
        ))}
      </div>
      
      {/* Lightning Strikes */}
      <div className="lightning-bolt" style={{ left: '20%' }}></div>
      <div className="lightning-bolt" style={{ left: '70%' }}></div>
      <div className="lightning-bolt" style={{ left: '45%' }}></div>
      
      {/* Enhanced Lightning Flash Effect */}
      <div className="lightning-flash"></div>

      {/* Natural Mountain Range */}
      <div className="swiss-mountains">
        <div className="mountain-range"></div>
        <div className="mountain-left-peak"></div>
        <div className="mountain-right-peak"></div>
      </div>

      {/* Castle Silhouettes on Rolling Hills */}
      <div className="castle-silhouette castle-left"></div>
      <div className="castle-silhouette castle-right"></div>

      {/* Rolling Green Hills */}
      <div className="grassy-hills">
        <div className="hill-layer hill-back"></div>
        <div className="hill-layer hill-mid"></div>
        <div className="hill-layer hill-front"></div>
      </div>

      {/* Dense Pine Forest */}
      <div className="pine-forest">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className={`pine-tree ${
              i % 4 === 0 ? 'pine-large' : 
              i % 3 === 0 ? 'pine-medium' : 
              i % 2 === 0 ? 'pine-small' : 'pine-tiny'
            } tree-${i + 1}`}
          >
            <div className="pine-trunk"></div>
            <div className="pine-branches">
              <div className="pine-layer pine-layer-1"></div>
              <div className="pine-layer pine-layer-2"></div>
              <div className="pine-layer pine-layer-3"></div>
              <div className="pine-layer pine-layer-4"></div>
              <div className="pine-layer pine-layer-5"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal River System */}
      <div className="river-system">
        <div className="river-bank-left"></div>
        <div className="horizontal-river"></div>
        <div className="river-reflections"></div>
        <div className="river-bank-right"></div>
        <div className="river-rocks">
          <div className="rock rock-large rock-1"></div>
          <div className="rock rock-medium rock-2"></div>
          <div className="rock rock-small rock-3"></div>
          <div className="rock rock-medium rock-4"></div>
          <div className="rock rock-large rock-5"></div>
          <div className="rock rock-small rock-6"></div>
          <div className="rock rock-medium rock-7"></div>
          <div className="rock rock-small rock-8"></div>
          <div className="rock rock-large rock-9"></div>
          <div className="rock rock-small rock-10"></div>
        </div>
      </div>

      {/* Realistic Log Cabin */}
      <div className="log-cabin">
        <div className="cabin-foundation"></div>
        <div className="cabin-walls">
          <div className="cabin-logs"></div>
        </div>
        <div className="cabin-roof"></div>
        <div className="cabin-door">
          <div className="cabin-door-handle"></div>
        </div>
        <div className="cabin-windows"></div>
        <div className="cabin-windows-right"></div>
        <div className="cabin-chimney">
          <div className="cabin-smoke"></div>
        </div>
      </div>

      {/* Storm Audio Ambience */}
      <StormAmbience />

      {/* Soft Classical-Lofi Background Music */}
      <BackgroundMusic volume={0.12} />
      


      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        {/* Header with App Title */}
        <header className="py-8 px-4 text-center relative">
          {/* Header background for better readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-amber-900/80 to-gray-900/85 backdrop-blur-md rounded-lg mx-4 shadow-2xl border border-amber-600/50"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-xl italic" style={{ fontFamily: 'cursive', textShadow: '3px 3px 6px rgba(0,0,0,0.7)' }}>
              Story Haven
            </h1>
            <p className="text-lg md:text-xl text-amber-100 font-medium italic max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
              ✨ Magical bedtime stories for families everywhere - completely free! 📚👨‍👩‍👧‍👦
            </p>
          </div>
        </header>

        {/* Animated Light Beams - Header/Body Junction */}
        <div className="relative w-full h-2 overflow-hidden">
          <div className="light-beam"></div>
          <div className="light-beam"></div>
          <div className="light-beam"></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedStory ? (
          /* Centered search when no story selected */
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-2xl">
              <StoryFilter onFilterChange={handleFilterChange} className="mb-8" />
              
              {/* Story Results - Centered */}
              {filteredStories.length > 0 && (
                <div className="bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl p-6 border-2 border-amber-600 stone-texture" style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                  <h3 className="text-2xl font-semibold text-amber-100 mb-6 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    ✨ Found {filteredStories.length} Magical {filteredStories.length === 1 ? 'Story' : 'Stories'}
                  </h3>
                  <div className="grid gap-3">
                    {filteredStories.map((story) => (
                      <button
                        key={story.id}
                        onClick={() => setSelectedStoryId(story.id)}
                        className="w-full text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 border-2 border-amber-500 hover:border-amber-400 shadow-lg hover:shadow-xl"
                        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' }}
                      >
                        <div className="font-semibold text-white mb-2 text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                          📚 {story.title}
                        </div>
                        <div className="text-sm text-amber-100" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
                          ⏱️ {story.estimatedReadingTime} min • 🎭 {story.genre.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Sidebar layout when story is selected */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <button
                onClick={() => setSelectedStoryId(null)}
                className="w-full mb-4 p-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ← Back to Story Search
              </button>
              
              <StoryFilter onFilterChange={handleFilterChange} />
              
              {/* Story Results */}
              {filteredStories.length > 0 && (
                <div className="mt-6 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl p-4 border-2 border-amber-600 stone-texture" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                  <h3 className="text-lg font-semibold text-amber-100 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                    ✨ {filteredStories.length} {filteredStories.length === 1 ? 'Story' : 'Stories'}
                  </h3>
                  <div className="space-y-2">
                    {filteredStories.map((story) => (
                      <button
                        key={story.id}
                        onClick={() => setSelectedStoryId(story.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          selectedStoryId === story.id
                            ? 'bg-gradient-to-r from-amber-600 to-yellow-600 border-2 border-amber-400 shadow-lg'
                            : 'bg-amber-700/60 hover:bg-amber-600/70 border-2 border-amber-500 hover:border-amber-400'
                        }`}
                        style={{ boxShadow: selectedStoryId === story.id ? '0 6px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)' : '0 2px 8px rgba(0,0,0,0.3)' }}
                      >
                        <div className="font-medium text-white mb-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                          📚 {story.title}
                        </div>
                        <div className="text-sm text-amber-100" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
                          ⏱️ {story.estimatedReadingTime} min • 🎭 {story.genre.replace('-', ' ')}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main content area */}
            <div className="lg:col-span-3">
              <StoryDisplay story={selectedStory} />
            </div>
          </div>
        )}
        
        {/* Welcome message when no filters applied */}
        {!selectedStory && filteredStories.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-2xl">
              <StoryFilter onFilterChange={handleFilterChange} className="mb-8" />
              
              <div className="bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl p-8 text-center border-2 border-amber-600 stone-texture" style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                <div className="text-amber-300 mb-6">
                  <svg className="w-20 h-20 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 
                  className="text-3xl font-bold text-white mb-4 italic"
                  style={{ fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                >
                  Welcome to the Enchanted Library! 🏰
                </h2>
                <p className="text-amber-100 mb-8 text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
                  Use the magical filters above to discover the perfect bedtime story.
                  Our collection spans mystical realms, ancient times, and modern adventures!
                </p>
                <div className="bg-gradient-to-r from-amber-700 to-yellow-700 rounded-xl p-6 border-2 border-amber-500" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' }}>
                  <h3 className="font-semibold text-white mb-4 text-xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>✨ Magical Features</h3>
                  <ul className="text-amber-100 space-y-2 text-left max-w-md mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    <li className="flex items-center"><span className="mr-2">🎭</span> Filter by genre, time period, and age group</li>
                    <li className="flex items-center"><span className="mr-2">🎤</span> Enchanted text-to-speech narration</li>
                    <li className="flex items-center"><span className="mr-2">⚡</span> Adjustable reading speed and voice magic</li>
                    <li className="flex items-center"><span className="mr-2">📚</span> Stories from ancient public libraries</li>
                    <li className="flex items-center"><span className="mr-2">💝</span> Completely free for all families</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated Light Beams - Body/Footer Junction */}
      <div className="relative w-full h-2 overflow-hidden">
        <div className="light-beam"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white border-t border-blue-800/70 shadow-2xl" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #374151 50%, #000000 100%)', boxShadow: '0 -10px 25px rgba(0,0,0,0.4), inset 0 1px 0 rgba(59, 130, 246, 0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 
              className="text-2xl font-bold text-yellow-400 mb-2 italic"
              style={{ fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0,0,0,0.8)', color: '#ffd700' }}
            >
              👑 Once Upon A Time...
            </h3>
            <p className="mb-4 text-lg" style={{ color: '#ff1493', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Bringing magical bedtime stories to families across all realms
            </p>
            <p className="text-sm text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              All stories are sourced from enchanted public domain collections and are free to use.
              Created with ❤️ and ✨ to support families&apos; access to quality children&apos;s literature.
              This website is inspired by my loving mother <span style={{ color: '#ff073a', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Cyndi</span> who reads to underprivileged children in need. <span style={{ color: '#dc2626', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Love you Mom.</span> <span style={{ color: '#0ea5e9', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>-Matthew</span>
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}