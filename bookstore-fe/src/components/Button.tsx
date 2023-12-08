import React from 'react'

interface buttonProps {
    type?: string;
    text: string
}

export default function Button({ type = 'default', text }: buttonProps) {
    const getClass = (type: string): string => {
        switch (type) {
            case 'bordered':
                return 'text-[#3D00B7] transition-all duration-500 hover:duration-500 hover:bg-[#3D00B7] hover:text-white hover:transition-all';
                break;
            default:
                return 'bg-[#3D00B7] transition-all duration-500 hover:duration-500 hover:opacity-70 hover:transition-all text-white'
        }
        return ''
    }
    return (
        <button className={`${getClass(type)} font-bold rounded-[60px] py-2 px-6 border-2 border-[#3D00B7] min-w-[130px]`}>
            {text}
        </button>
    )
}
