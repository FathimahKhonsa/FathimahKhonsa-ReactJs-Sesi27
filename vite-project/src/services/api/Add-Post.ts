import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { DataType } from '../../assets/componenets/Constants'

const fetcher =  async(payload: Omit<DataType, "id">) => {
    return await axios.post(`https://jsonplaceholder.typicode.com/posts`, payload).then((res) => res.data)
}

export const useAddPost = () => {
  return useMutation({mutationFn : fetcher})
}