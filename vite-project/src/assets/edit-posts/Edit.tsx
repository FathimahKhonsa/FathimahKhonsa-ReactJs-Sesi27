import { Button } from 'antd'
import React, { FC } from 'react'
import { DataType } from '../componenets/Constants'
import { useNavigate } from 'react-router-dom'

const Edit: FC<DataType> = (props) => {
  const nav = useNavigate()

  return (
    <Button onClick={() => nav(`/${props.id}`, {state: props})}>
        Edit
    </Button>
  )
}

export default Edit
