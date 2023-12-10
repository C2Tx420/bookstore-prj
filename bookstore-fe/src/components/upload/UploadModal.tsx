import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hook/reduxHook';
import CustomizeButton from '../CustomizeButton';
import { Button, Form, Input, Modal, Upload, UploadFile, UploadProps, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FaUpload } from 'react-icons/fa';
import { supabase } from '../../config/supabase';
import { addBookAction } from '../../store/books/action';

export default function UploadModal() {
    const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [api, contextHolder] = message.useMessage();
    const user = useSelector((state: any) => state.auth.user);
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const imageProps: UploadProps = {
        onRemove: () => {
            setFileList([]);
        },
        beforeUpload: (file) => {
            setFileList([file]);

            return false;
        },
        fileList,
    };

    const uploadEnt = [
        { label: 'Title', name: 'title', input: <Input /> },
        {
            label: 'Description', name: 'description', input: <TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
            />
        },
        { label: 'Author', name: 'author', input: <Input /> },
        {
            label: 'Image',
            name: 'image',
            input: <Upload {...imageProps} accept='image/*'>
                <Button icon={<FaUpload />}>Select File</Button>
            </Upload>
        },
    ]
    const handleOpen = () => {
        if (!user) {
            // api.info('Please login before upload!');
            setIsOpen(true);
        } else {
            setIsOpen(true)
        }
    }
    const handleSubmit = async (uploadForm: any) => {
        const file: any = fileList[0]
        const fileExt = fileList[0].name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const newFilePath = `${fileName}`;
        const imageUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/minted_image/${fileName}`
        await supabase.storage.from('book_image').upload(newFilePath, file);
        const submitForm = { ...uploadForm, image: imageUrl };
        try {
            await dispatch(addBookAction(submitForm));
            setIsOpen(false);
            form.resetFields();
            api.success('Add Success!');
        } catch (e: any) {
            api.error(e.message)
        }
    }
    return (
        <>
            {contextHolder}
            <CustomizeButton text='Upload' type='bordered' onClick={handleOpen} />
            <Modal open={isOpen} title={'Upload Book'} mask={false} footer={null} closable={true} onCancel={() => setIsOpen(false)}>
                <Form
                    name="loginForm"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleSubmit}
                    className='pt-3'
                    autoComplete="off"
                    form={form}
                >
                    {uploadEnt.map((item: any, idx: number) =>
                        <Form.Item
                            label={item.label}
                            name={item.name}
                            labelAlign='left'
                            key={idx}
                            rules={[
                                { required: true, message: `Please input your ${item.name}!` },
                            ]}
                        >
                            {item.input}
                        </Form.Item>
                    )}

                    <Form.Item className='flex justify-center'>
                        <CustomizeButton text='Upload' />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}