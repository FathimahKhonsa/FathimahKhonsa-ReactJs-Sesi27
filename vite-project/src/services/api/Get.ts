import { useQuery } from "@tanstack/react-query"
import { Result } from "antd"
import axios from "axios"
import { Store } from "./stores/store"
import { useEffect } from "react"

export interface Post{
    userId: number,
    id: number,
    title: string,
    body: string
}

const fetcher = async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => res.data)
}

export const getPosts = () => {
    const {setPosts, posts} = Store()
    const result = useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: fetcher
    })

    useEffect(() => {
        if(result.data) setPosts(result.data)
    }, [result.data])

    return {...result, posts}
}