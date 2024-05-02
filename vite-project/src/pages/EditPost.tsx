import React, { ComponentProps, ComponentType } from 'react'
import Detail from './Detail'
import { useLocation } from 'react-router-dom'
import { DataType } from '../assets/componenets/Constants'
import { useEditPost } from '../services/api/Edit-Post'
import { Store } from '../services/api/stores/store'

type DetailProps = ComponentProps<typeof Detail>

const EditPost = (WrappedComponent: ComponentType<DetailProps>) => {
  const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
    const location = useLocation()
    const state = location.state as DataType
    const {mutate} = useEditPost()
    const {setPosts, posts} = Store()
    const onSubmit = (value: any) => {
        mutate({...value, id:state.id},
           {
            onSuccess: (res) => {
                console.log(res)
                setPosts([...posts, ...res])
            }
        })
    }

    return <WrappedComponent {...props} initialValue={state} onSubmit={onSubmit}/>
  } 
  
  return NewComponent
}

export default EditPost
