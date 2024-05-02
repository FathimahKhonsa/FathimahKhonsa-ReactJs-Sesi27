import { Button, Form, Input } from 'antd';
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

type OnSubmit ={
    title : string;
    body : string;
}

const Detail: FC<{onSubmit?: (value: OnSubmit) => void, initialValue?: object}> = ({onSubmit, initialValue}) => {
  const nav = useNavigate()  
  const onFinish = (value: OnSubmit) => {
    if (onSubmit) onSubmit(value)
        nav('/')
  } 

  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"200px"}}>
        <Form style={{textAlign:"center", width:"50%"}} onFinish={onFinish} initialValues={initialValue}>
            <Form.Item label="Title" name="title" style={{fontWeight:'bold'}}>
                <Input/>
            </Form.Item>
            <Form.Item label="Description" name="body" style={{fontWeight:'bold'}}>
                <Input/>
            </Form.Item>

            <Button htmlType='submit'>Submit</Button>
        </Form>
    </div>
  )
}

export default Detail
