import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Container } from './styles';
import { PostStyle } from './styles';

interface PostProps {
    id: number,
    image: string,
    title: string,
    createAt: string,
    description: string
}

export function Post() {
    const [posts, setPosts] = useState<PostProps[]>([]);


    useEffect(() => {
        api('posts')
            .then(response => setPosts(response.data.posts))

    }, [])


    return (
        <Container>
            <PostStyle>
                {posts.map(post => (
                    <li key={post.id}>
                        <img src={post.image} alt={post.title}></img>
                        <h2>{post.title}</h2>
                        <h5>{post.createAt}</h5>
                        <p>{post.description}</p>
                        <span>Leia mais</span>
                    </li>
                ))}
            </PostStyle>
        </Container>
    )
}