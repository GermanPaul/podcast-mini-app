import React from 'react'
import { PodcastDetailsItem } from '@/types/podcastDetailsApi'
import { msToTime } from '@/utils'

import { Link } from 'react-router-dom'

interface ItemListProps {
  items: PodcastDetailsItem[]
  podcastId: string
}

const ItemList = ({ items, podcastId }: ItemListProps) => {
  return <div className='px-4'>
    <div className='shadow-md p-3 mb-2 text-lg font-bold'>Episodes: {items.length}</div>
    <div className='shadow-md p-3'>
      <table className='w-full'>
        <thead className='border-b-2'>
          <tr>
            <th className='w-2/3 text-left'>Title</th>
            <th className='w-1/6 text-left'>Date</th>
            <th className='w-1/6 text-left'>Duration</th>
          </tr>
        </thead>
        <tbody className='[&>*:nth-child(odd)]:bg-gray-100'>
          {
            items.map((item, index, array) => {
              const date = new Date(item.date)
              const duration = isNaN(item.duration as any) ?
                item.duration :
                msToTime(parseInt(item.duration))

              return <tr className='h-8' key={`row-${index + 1}`}>
                <td><Link className='text-sky-700' to={`/podcast/${podcastId}/episode/${item.id}`}>{item.title}</Link></td>
                <td>{date.toLocaleDateString('en')}</td>
                <td>{duration}</td>
              </tr>
            }
            )
          }
        </tbody>
      </table>
    </div>
  </div>
}

export default ItemList
