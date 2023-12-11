import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../hook/reduxHook';
import { getBookDetailAction } from '../store/books/action';
import { useSelector } from 'react-redux';
import { bookModel } from '../types/book.model';

export default function Detail() {
    const { id } = useParams();
    const bookData: bookModel = useSelector((state:any) => state.book.detail);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if(id) {
            dispatch(getBookDetailAction(id));
        } 
    },[])
    return (
        <div className='grid grid-cols-2 gap-5 py-5'>
            <img src={bookData.image} alt="" className='h-[500px] object-cover object-center rounded-xl' />
            <div>
                <div className="font-bold text-2xl">{(bookData.title).toUpperCase()}</div>
                <div className="font-medium text-sm opacity-75">{bookData.author}</div>
                <div className="text-base opacity-70">{bookData.description}</div>
            </div>
        </div>
    )
}
