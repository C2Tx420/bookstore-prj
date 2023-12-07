import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import Button from './Button'

export default function Header() {
  return (
    <header className='py-4 border-b border-[#EFEFEF]'>
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={'/'} className="font-bold text-2xl text-[#3D00B7] tracking-tighter">BOOK</Link>
          <div className="flex gap-5 items-center">
            <SearchBox />
            <Button text='Login'/>
          </div>
        </div>
      </div>
    </header>
  )
}
