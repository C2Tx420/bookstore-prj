import React from 'react'
import CardItem from './CardItem';
import { bookModel } from '../types/book.model';

interface listItemProps {
    dataList: any;
}

export default function ListItem({ dataList }: listItemProps) {
    return (
        <>
            {dataList.map((item: bookModel, idx: any) => {
                <CardItem data={item} key={idx} />
            })}
        </>
    )
}
