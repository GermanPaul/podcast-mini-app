import React from 'react'
import { Link } from 'react-router-dom';
import { useI18n } from '@/utils/hooks/useI18n';

const Home = () => {
  const { t } = useI18n();

  return <nav className='p-3 border-b border-b-gray-200'>
    <Link to="/" className='text-2xl font-bold text-cyan-600'>
      {t('title')}
    </Link>
  </nav>
}

export default Home
