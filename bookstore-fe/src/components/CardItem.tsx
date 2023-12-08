import React from 'react'
import { bookModel } from '../types/book.model'

interface cardItemProps {
    data: bookModel
}

export default function CardItem({ data }: cardItemProps) {
    return (
        <div>CardItem {data.title}</div>
    )
}
