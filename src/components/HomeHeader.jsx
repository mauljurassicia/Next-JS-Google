import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'

export default function HomeHeader() {
  return (
   <header className='flex  justify-end p-5 text-sm'>
    <div className='flex space-x-4 items-center'>
        <Link href={"https://mail.google.com/"} className='hover:underline'>Gmail</Link>
        <Link href={"https://images.google.com/"} className='hover:underline'>Images</Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl' />
        <button className='bg-blue-500 hover:brightness-105 text-white font-medium py-2 px-6 rounded-md hover:shadow-md transition-shadow'>Sign In</button>
    </div>
   </header>
  )
}
