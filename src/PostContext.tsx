import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export const PostContext = createContext<PostProps[]>([]);


interface PostProps {
    id: number,
    image: string,
    title: string,
    createAt: string,
    description: string
}

interface PostProviderProps {
    children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
    const [posts, setPosts] = useState<PostProps[]>([]);


    useEffect(() => {
        api('posts')
            .then(response => setPosts(response.data.posts))

    }, [])

    return (
        <PostContext.Provider value={posts}>
            {children}
        </PostContext.Provider>
    )
}