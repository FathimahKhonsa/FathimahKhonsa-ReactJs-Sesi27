import { Button } from 'antd'
import React, { FC } from 'react'
import { deletePost } from './DeletePost'
import { Store } from '../../services/api/stores/store'

const Delete: FC<{id : number}> = ({id}) => {
  const{mutate} = deletePost()  
  const{setPosts, posts} = Store()
  return (
    <Button style={{marginTop:"5px"}} onClick={() => {
        mutate(id, {onSuccess: () => {
            setPosts(posts.filter((post) => post.id !== id))
        }})
    }}>
      Delete
    </Button>
  )
}

export default Delete
