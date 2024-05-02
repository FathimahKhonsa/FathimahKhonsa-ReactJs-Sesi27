import React, { ComponentProps, ComponentType } from 'react'
import Detail from './Detail'
import { useAddPost } from '../services/api/Add-Post'
import { Store } from '../services/api/stores/store'

type DetailProps = ComponentProps<typeof Detail>

const AddPost = (WrappedComponent: ComponentType<DetailProps>) => {
  const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
    const {mutate} = useAddPost()
    const {setPosts, posts} = Store()
    const onSubmit = (value: any) => {
        mutate(value, {
            onSuccess: (res) => {
                console.log(res)
                setPosts([...posts, ...res])
            }
        })
    }

    return <WrappedComponent {...props} onSubmit={onSubmit}/>
  } 

  return NewComponent
}

export default AddPost
