import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface PostProps {
    id: number,
    image: string,
    title: string,
    createAt: string,
    description: string
}

type PostInput = Omit<PostProps, 'id' | 'createAt'>

interface PostProviderProps {
    children: ReactNode
}

interface PostContextData {
    posts: PostProps[],
    createPost: (posts: PostInput) => Promise<void>;
}

export const PostContext = createContext<PostContextData>({} as PostContextData);

export function PostProvider({ children }: PostProviderProps) {
    const [posts, setPosts] = useState<PostProps[]>([]);


    useEffect(() => {
        api('posts')
            .then(response => setPosts(response.data.posts))

    }, [])

    async function createPost(postInput: PostInput) {

        const response = await api.post('/posts', { ...postInput, createAt: new Date() });
        const { post } = response.data;

        setPosts([
            ...posts,
            post
        ])
    }

    return (
        <PostContext.Provider value={{ posts, createPost }}>
            {children}
        </PostContext.Provider>
    )
}