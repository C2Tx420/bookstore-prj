import { useState, ChangeEvent, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { bookModel } from '../types/book.model';
import { Popover } from 'antd';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBox: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchList, setSearchList] = useState<Array<bookModel>>([]);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const listBook: Array<bookModel> = useSelector((state: any) => state.book.list);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setSearchValue(value);

    if (value) {
      const result = listBook.filter((book: bookModel) => book.title.toLowerCase().includes(value.toLowerCase()));
      setSearchList(result);
    } else {
      setSearchList([]);
    }
  };

  const gotoDetail = (uuid: string) => {
    navigate(`/detail/${uuid}`);
    setSearchList([]);
    setSearchValue('');
    setOpenSearch(false);
  }

  const searchListComponent: ReactNode = (
    <>
      {searchList.length > 0 ? searchList.map((item: bookModel, idx: number) => (
        <div key={idx} className='py-1 font-bold hover:opacity-50 cursor-pointer' onClick={() => gotoDetail(item.uuid)}>{item.title}</div>
      )) :
        <div className='opacity-50 text-center'>
          not found !
        </div>}
    </>
  );

  return (
    <div className="flex items-center px-5 py-2 border-2 border-[#EFEFEF] rounded-[100px] gap-2">
      <Popover
        content={searchListComponent}
        title="Search List"
        trigger="click"
        open={(!!searchValue || searchList.length > 0) && openSearch}
        onOpenChange={(e: boolean) => setOpenSearch(e)}
      >
        <input
          type="text"
          placeholder="Search..."
          className="focus-visible:outline-none font-medium"
          onChange={handleChange}
          value={searchValue}
        />
      </Popover>
      {searchValue ? (
        <FaTimesCircle
          size={20}
          className="text-[#757575] cursor-pointer"
          onClick={() => setSearchValue('')}
        />
      ) : (
        <FaSearch size={20} className="text-[#757575]" />
      )}
    </div>
  );
};

export default SearchBox;
