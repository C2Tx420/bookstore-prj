import React, { useEffect } from 'react'
import { useAppDispatch } from '../hook/reduxHook'
import { getBookListAction } from '../store/books/action'
import { bookModel } from '../types/book.model'
import CardItem from '../components/CardItem'
import { useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useAppDispatch()
  const listBook = useSelector((state: any) => state.book.list);
  useEffect(() => {
    dispatch(getBookListAction())
  }, [])
  return (
    <div className="my-10">
      <div className="text-xl font-bold">Home</div>
      {listBook.length > 0 &&
        <div className='grid grid-cols-4 gap-2'>
          {listBook.map((item: bookModel, idx: any) => (
            <CardItem data={item} key={idx} />
          ))}
        </div>
      }
    </div>
  )
}
