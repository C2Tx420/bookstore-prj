import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
import CustomizeButton from '../CustomizeButton';
import LoginModal from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAppDispatch } from '../../hook/reduxHook';
import { logoutAction } from '../../store/auth/action';

export default function AuthModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState('Login');
    const dispatch = useAppDispatch();
    const user = useSelector((state: any) => state.auth.user)
    const gotoRegister = () => {
        setCurrent('Register');
    }
    const gotoLogin = () => {
        setCurrent('Login');
    }
    useEffect(() => {
        setCurrent('Login');
    }, [isOpen])
    return (
        <>
            {user ?
                <div className="flex items-center">
                    <div className="truncate overflow-hidden w-[120px] font-bold ">
                        {user.email}
                    </div>
                    <FaSignOutAlt className='cursor-pointer hover:opacity-50' onClick={()=>dispatch(logoutAction())}/>
                </div>
                :
                <>
                    <CustomizeButton text='Login' onClick={() => setIsOpen(true)} />
                    <Modal open={isOpen} title={current} mask={false} footer={null} closable={true} onCancel={() => setIsOpen(false)}>
                        {current === 'Login' && <LoginModal gotoRegister={gotoRegister} closeModal={() => setIsOpen(false)} />}
                        {current === 'Register' && <Register gotoLogin={gotoLogin} />}
                    </Modal>
                </>
            }
        </>
    )
}