'use client'

import { useState } from 'react'
import { Genre, TimePeriod, GenderPreference, AgeGroup, StoryFilters } from '@/types/story'

interface StoryFilterProps {
  onFilterChange: (filters: StoryFilters) => void
  className?: string
}

export default function StoryFilter({ onFilterChange, className = '' }: StoryFilterProps) {
  const [filters, setFilters] = useState<StoryFilters>({})

  const handleFilterChange = (key: keyof StoryFilters, value: string | number | boolean | undefined) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className={`bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl p-6 border-2 border-amber-600 stone-texture ${className}`} style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
      <h2 className="text-2xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>🔮 Find Your Perfect Tale</h2>
      
      {/* Genre Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-amber-100 mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          📚 Story Type
        </label>
        <select
          className="w-full p-4 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 font-medium shadow-sm transition-all duration-200"
          value={filters.genre || ''}
          onChange={(e) => handleFilterChange('genre', e.target.value as Genre)}
        >
          <option value="">All Story Types</option>
          <option value={Genre.FAIRY_TALES}>🎭 Fairy Tales & Fables</option>
          <option value={Genre.FANTASY}>🐉 Fantasy</option>
          <option value={Genre.SCIENCE_FICTION}>👽 Science Fiction</option>
          <option value={Genre.RHYME_STORIES}>🎵 Rhyming Stories</option>
          <option value={Genre.BIBLICAL_STORIES}>✝️ Biblical Stories</option>
          <option value={Genre.PICTURE_BOOKS}>📷 Picture Books</option>
          <option value={Genre.CHAPTER_BOOKS}>📖 Chapter Books</option>
        </select>
      </div>

      {/* Time Period Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-amber-100 mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          ⏰ Time Period
        </label>
        <select
          className="w-full p-4 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-900 font-medium shadow-lg transition-all duration-200"
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)', textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)' }}
          value={filters.timePeriod || ''}
          onChange={(e) => handleFilterChange('timePeriod', e.target.value as TimePeriod)}
        >
          <option value="">Any Time Period</option>
          <option value={TimePeriod.BIBLICAL}>Biblical Times</option>
          <option value={TimePeriod.ANCIENT}>Ancient Times</option>
          <option value={TimePeriod.MEDIEVAL}>Medieval</option>
          <option value={TimePeriod.RENAISSANCE}>Renaissance</option>
          <option value={TimePeriod.COLONIAL}>Colonial Era</option>
          <option value={TimePeriod.VICTORIAN}>Victorian Era</option>
          <option value={TimePeriod.EARLY_20TH_CENTURY}>Early 1900s</option>
          <option value={TimePeriod.MID_20TH_CENTURY}>Mid 1900s</option>
          <option value={TimePeriod.MODERN}>Modern Times</option>
          <option value={TimePeriod.CONTEMPORARY}>Today</option>
        </select>
      </div>

      {/* Age Group Selection */}
      <div className="mb-6">
                <label className="block text-sm font-semibold text-amber-100 mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          🎆 Age Group
        </label>
        <select
          className="w-full p-4 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-900 font-medium shadow-lg transition-all duration-200"
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)', textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)' }}
          value={filters.ageGroup || ''}
          onChange={(e) => handleFilterChange('ageGroup', e.target.value as AgeGroup)}
        >
          <option value="">Any Age</option>
          <option value={AgeGroup.TODDLER}>Toddler (2-4 years)</option>
          <option value={AgeGroup.PRESCHOOL}>Preschool (4-6 years)</option>
          <option value={AgeGroup.EARLY_ELEMENTARY}>Early Elementary (6-8 years)</option>
          <option value={AgeGroup.ELEMENTARY}>Elementary (8-12 years)</option>
          <option value={AgeGroup.MIDDLE_GRADE}>Middle Grade (12+ years)</option>
        </select>
      </div>

      {/* Gender Preference */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-amber-100 mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          🎭 Character Gender Preference
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-3 rounded-lg bg-gradient-to-r from-amber-200 to-yellow-200 border-2 border-amber-400 hover:bg-gradient-to-r hover:from-amber-300 hover:to-yellow-300 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <input
              type="radio"
              name="genderPreference"
              value={GenderPreference.NO_PREFERENCE}
              checked={filters.genderPreference === GenderPreference.NO_PREFERENCE || !filters.genderPreference}
              onChange={(e) => handleFilterChange('genderPreference', e.target.value as GenderPreference)}
              className="mr-3 text-amber-600"
            />
            <span className="text-sm font-medium text-gray-900" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)' }}>❌ No Preference</span>
          </label>
          <label className="flex items-center p-3 rounded-lg bg-gradient-to-r from-amber-200 to-yellow-200 border-2 border-amber-400 hover:bg-gradient-to-r hover:from-amber-300 hover:to-yellow-300 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <input
              type="radio"
              name="genderPreference"
              value={GenderPreference.MALE}
              checked={filters.genderPreference === GenderPreference.MALE}
              onChange={(e) => handleFilterChange('genderPreference', e.target.value as GenderPreference)}
              className="mr-3 text-amber-600"
            />
            <span className="text-sm font-medium text-gray-900" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)' }}>🤴 Male Characters</span>
          </label>
          <label className="flex items-center p-3 rounded-lg bg-gradient-to-r from-amber-200 to-yellow-200 border-2 border-amber-400 hover:bg-gradient-to-r hover:from-amber-300 hover:to-yellow-300 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <input
              type="radio"
              name="genderPreference"
              value={GenderPreference.FEMALE}
              checked={filters.genderPreference === GenderPreference.FEMALE}
              onChange={(e) => handleFilterChange('genderPreference', e.target.value as GenderPreference)}
              className="mr-3 text-amber-600"
            />
            <span className="text-sm font-medium text-gray-900" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)' }}>👸 Female Characters</span>
          </label>
        </div>
      </div>

      {/* Reading Time */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-amber-100 mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          ⏱️ Maximum Reading Time
        </label>
        <select
          className="w-full p-4 border-2 border-amber-400 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-900 font-medium shadow-lg transition-all duration-200"
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)', textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)' }}
          value={filters.maxReadingTime || ''}
          onChange={(e) => handleFilterChange('maxReadingTime', e.target.value ? parseInt(e.target.value) : undefined)}
        >
          <option value="">Any Length</option>
          <option value="5">5 minutes or less</option>
          <option value="10">10 minutes or less</option>
          <option value="15">15 minutes or less</option>
          <option value="20">20 minutes or less</option>
          <option value="30">30 minutes or less</option>
          <option value="45">45 minutes or less</option>
          <option value="60">60 minutes or less</option>
          <option value="90">90 minutes or less</option>
          <option value="120">120 minutes or less</option>
        </select>
      </div>

      {/* Media Options */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-amber-800 mb-3">
          🎨 Media Options
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-3 rounded-lg bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 hover:bg-gradient-to-r hover:from-amber-200 hover:to-yellow-200 transition-all duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hasAudio || false}
              onChange={(e) => handleFilterChange('hasAudio', e.target.checked)}
              className="mr-3 text-amber-500"
            />
            <span className="text-sm font-medium text-amber-800">🎤 Audio narration available</span>
          </label>
          <label className="flex items-center p-3 rounded-lg bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 hover:bg-gradient-to-r hover:from-amber-200 hover:to-yellow-200 transition-all duration-200 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.hasVideo || false}
              onChange={(e) => handleFilterChange('hasVideo', e.target.checked)}
              className="mr-3 text-amber-500"
            />
            <span className="text-sm font-medium text-amber-800">🎬 Video visuals available</span>
          </label>
        </div>
      </div>
    </div>
  )
}