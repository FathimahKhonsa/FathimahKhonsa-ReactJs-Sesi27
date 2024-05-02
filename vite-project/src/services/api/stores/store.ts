import { create } from "zustand"
import { Post } from "../Get"

interface PostState {
    posts : Post[]
}

interface PostAction {
    setPosts: (payload: Post[]) => void
}

type PostStore = PostState & PostAction

export const Store = create<PostStore>((set) => ({
    posts: [],
    setPosts: (payload: Post[]) => set({posts: payload})
}))