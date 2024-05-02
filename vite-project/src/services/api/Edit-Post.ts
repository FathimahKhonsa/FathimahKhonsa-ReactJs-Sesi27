import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { DataType } from '../../assets/componenets/Constants'

const fetcher =  async(payload: DataType) => {
    return await axios.put(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
        title:payload.title, description:payload.body})
    .then((res) => res.data)
}

export const useEditPost = () => {
  return useMutation({mutationFn : fetcher})
}

