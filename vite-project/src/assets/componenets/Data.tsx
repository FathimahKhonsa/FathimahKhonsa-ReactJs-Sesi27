import { Table } from 'antd'
import React , { FC } from 'react'
import columns from './Constants'
import { getPosts } from '../../services/api/Get'
import { Store } from '../../services/api/stores/store'

const Data: FC = () => {
  const {posts} = getPosts()

  return (
    <Table columns={columns} dataSource={posts}/>
  )
}

export default Data

