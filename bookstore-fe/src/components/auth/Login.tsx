import { Form, Input, message } from 'antd';
import { useEffect } from 'react'
import CustomizeButton from '../CustomizeButton';
import { useAppDispatch } from '../../hook/reduxHook';
import { loginAction } from '../../store/auth/action';

export default function Login({ gotoRegister, closeModal }: any) {
  const [form] = Form.useForm();
  const [api, contextHolder] = message.useMessage();
  const dispatch = useAppDispatch();
  const handleSubmit = (loginForm: any) => {
    try{
      dispatch(loginAction(loginForm));
      api.success('Login Success')
      closeModal();
    }catch(e: any) {
      api.error(e.message);
    }
  }

  useEffect(() => {
    form.resetFields();
  })

  return (
    <>
      {contextHolder}
      <Form
        name="loginForm"
        form={form}
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
      </Form>
      <div className="flex justify-center gap-3">
        <CustomizeButton text='Login' onClick={() => form.submit()} />
        <CustomizeButton text='Register' onClick={gotoRegister} />
      </div>
    </>
  )
}
