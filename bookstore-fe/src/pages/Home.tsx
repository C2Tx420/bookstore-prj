import React, { useEffect } from 'react'
import { loginAction } from '../store/auth/action'
import { useAppDispatch } from '../hook/reduxHook'

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loginAction({username:'aaa',password: 'aaa'}))
  }, [])
  return (
    <div className="my-10">
      <div className="text-xl font-bold">Home</div>
    </div>
  )
}
