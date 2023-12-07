import React from 'react'

interface buttonProps {
    type?: string;
    text: string
}

export default function Button({type = 'default', text}: buttonProps) {
    const getClass = (type: string): string => {
        switch(type) {
            default:
                return 'border-2 border-[#3D00B7]'
        }
        return ''
    }
  return (
    <button className={getClass(type)}>
        {text}
    </button>
  )
}
