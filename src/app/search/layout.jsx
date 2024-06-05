import SearchHeader from '@/components/SearchHeader'
import React from 'react'

export default function layout({ children }) {
  return (
    <div>
        <SearchHeader/>
        {children}
    </div>
  )
}
