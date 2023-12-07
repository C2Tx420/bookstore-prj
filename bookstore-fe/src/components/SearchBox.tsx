import React, { useState } from 'react'
import { FaSearch, FaTimesCircle } from 'react-icons/fa';

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="flex items-center px-5 py-2 border-2 border-[#EFEFEF] rounded-[100px] gap-2">
      <input type="text" className='focus-visible:outline-none font-medium' onChange={(e)=>setSearchValue(e.currentTarget.value)} value={searchValue}/>
      {searchValue ? 
      <FaTimesCircle size={20} className={'text-[#757575] cursor-pointer'} onClick={()=>setSearchValue('')}/>
      :
      <FaSearch size={20} className={'text-[#757575]'} />
      }
    </div>
  )
}
