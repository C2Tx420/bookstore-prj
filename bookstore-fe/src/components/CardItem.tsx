import { bookModel } from '../types/book.model'
import { useNavigate } from 'react-router-dom'

interface cardItemProps {
    data: bookModel
}

export default function CardItem({ data }: cardItemProps) {
    const navigate = useNavigate();
    return (
        <div className='border border-[#ccc] bg-white p-3 rounded-xl transition-all duration-100 hover:duration-100 hover:-translate-y-2 cursor-pointer' onClick={()=>navigate(`/detail/${data.uuid}`)}>
            <img src={data.image} alt="" className='h-[200px] w-full object-cover object-center rounded-t-xl' />
            <p className="font-semibold mt-3 text-base">
                {data.title}
            </p>
        </div>
    )
}
