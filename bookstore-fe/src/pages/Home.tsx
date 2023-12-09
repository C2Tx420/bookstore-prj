import React, { useEffect } from 'react'
import { useAppDispatch } from '../hook/reduxHook'
import { getBookListAction } from '../store/books/action'

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getBookListAction())
  }, [])
  return (
    <div className="my-10">
      <div className="text-xl font-bold">Home</div>
    </div>
  )
}
