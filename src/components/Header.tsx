import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useI18n } from '@/hooks/useI18n'

import { Link } from 'react-router-dom'

const Header = () => {
  const { t } = useI18n();
  const isLoading = useSelector((state: RootState) => state.podcastFeed.isLoading)

  return <nav className='p-3 border-b border-b-gray-200 flex justify-between'>
    <Link to='/' className='text-2xl font-bold text-cyan-600'>
      {t('HEADER_TITLE')}
    </Link>
    {isLoading && <div className='flex items-center'>
      <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
        <circle 
          className='opacity-25 bg-white' 
          cx='12' 
          cy='12' 
          r='10' 
          stroke='currentColor' 
          fill='white' 
          strokeWidth='4'>
        </circle>
        <path 
          className='opacity-75 text-cyan-600' 
          fill='currentColor' 
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'>
        </path>
      </svg>
      <span className='mx-1'>{t('HEADER_LOADING')}...</span>
    </div>}
  </nav>
}

export default Header
