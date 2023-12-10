import { Form, Input, message } from 'antd';
import React from 'react'
import Button from '../Button';
import { useAppDispatch } from '../../hook/reduxHook';
import { registerAction } from '../../store/auth/action';

export default function Register({ gotoLogin }: any) {
    const dispatch = useAppDispatch();
    const [api, contextHolder] = message.useMessage();
    const handleSubmit = async (registerForm: any) => {
        try {
            await dispatch(registerAction(registerForm))
            api.success('Register Success')
            gotoLogin();
        } catch (e: any) {
            api.error(e.message)
        }
    }
    return (
        <>
            {contextHolder}
            <Form
                name="loginForm"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                onFinish={handleSubmit}
                className='pt-3'
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    labelAlign='left'
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please input correct email!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    labelAlign='left'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item className='flex justify-center'>
                    <Button text='Register' />
                </Form.Item>
            </Form>
        </>
    )
}
