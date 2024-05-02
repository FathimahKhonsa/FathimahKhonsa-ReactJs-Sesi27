import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const fetcher = async(id: number) => {
    return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.data)
}

export const deletePost = () => {
    return useMutation({mutationFn: fetcher})
}