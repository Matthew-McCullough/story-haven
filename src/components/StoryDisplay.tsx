'use client'

import { Story } from '@/types/story'
import TextToSpeech from './TextToSpeech'

interface StoryDisplayProps {
  story: Story
  className?: string
}

export default function StoryDisplay({ story, className = '' }: StoryDisplayProps) {
  return (
    <div className={`bg-gray-800/98 backdrop-blur-md rounded-xl shadow-2xl border-2 border-amber-600 ${className}`} style={{ boxShadow: '0 15px 35px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
      {/* Story Header */}
      <div className="p-6 border-b border-amber-200">
        <h1 className="text-4xl font-bold text-white mb-3 font-serif" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{story.title}</h1>
        
        {story.author && (
          <p className="text-lg text-amber-100 mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>by {story.author}</p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-600 text-white shadow-sm" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>
            {story.genre.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-600 text-white shadow-sm" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>
            {story.timePeriod.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-600 text-white shadow-sm" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>
            {story.ageGroup.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-700 text-white shadow-sm" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.5)' }}>
            ~{story.estimatedReadingTime} min read
          </span>
        </div>

        <div className="flex items-center space-x-4 text-sm text-amber-600">
          {story.hasAudio && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.791l-4.166-3.333a1 1 0 01-.383-.791V7.333a1 1 0 01.383-.791L8.383 3.076zM12 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zm3 2a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Audio Available
            </div>
          )}
          {story.hasVideo && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z" clipRule="evenodd" />
              </svg>
              Video Available
            </div>
          )}
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            Source: {story.source}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Audio Controls */}
        <div className="mb-6">
          <TextToSpeech text={story.content} />
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-100/90 backdrop-blur-sm rounded-lg p-6 border-2 border-amber-300 shadow-lg" style={{ boxShadow: '0 6px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)' }}>
            <div className="text-gray-900 leading-relaxed text-lg font-serif whitespace-pre-wrap" style={{ textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)' }}>
              {story.content}
            </div>
          </div>
        </div>

        {/* Video Placeholder (if available) */}
        {story.hasVideo && (
          <div className="mt-8 p-6 bg-amber-100/80 backdrop-blur-sm rounded-lg text-center border border-amber-300">
            <svg className="w-16 h-16 mx-auto text-amber-500 mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-medium text-amber-900 mb-2">Video Visual Available</h3>
            <p className="text-amber-700">
              Watch along as the story is narrated with visual elements to enhance the reading experience.
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors duration-200">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Play Video
            </button>
          </div>
        )}

        {/* Story Tags */}
        {story.tags && story.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Information */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            This story is sourced from {story.source} and is available for free public use.
            Story Haven is committed to providing access to quality children&apos;s literature
            for families everywhere.
          </p>
        </div>
      </div>
    </div>
  )
}