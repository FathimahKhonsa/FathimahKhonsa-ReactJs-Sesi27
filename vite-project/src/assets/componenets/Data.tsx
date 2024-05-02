import { Button, Table } from 'antd'
import React , { FC } from 'react'
import columns from './Constants'
import { getPosts } from '../../services/api/Get'
import { Store } from '../../services/api/stores/store'
import { useNavigate } from 'react-router-dom'

const Data: FC = () => {
  const {posts} = getPosts()
  const nav = useNavigate()

  return (
    <>
      <Button onClick={() => nav('/add')} style={{marginBottom:"15px"}}>Post Here</Button>
      <Table columns={columns} dataSource={posts}/>
    </>
  )
}

export default Data

