import { useContext, useState } from 'react';
import { PostContext } from '../hooks/PostContext';
import { Container } from './styles';
import { PostStyle } from './styles';

interface PostItemProps {
    post: {
        id: number,
        image: string,
        title: string,
        createAt: string,
        description: string,
    }
}

function PostItem({ post }: PostItemProps) {
    const [showMore, setShowMore] = useState(false);

    return (
        <li key={post.id}>
            <img src={post.image} alt={post.title}></img>
            <h2>{post.title}</h2>
            <h5>{Intl.DateTimeFormat('pt-BR').format(new Date(post.createAt))}</h5>
            <p>
                {showMore ? post.description : post.description.substring(0, 250) + '...'}
            </p>

            <span onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Mostrar menos' : 'Mostrar mais'}
            </span>
        </li>
    )
}

export function Post() {
    const { posts } = useContext(PostContext);


    return (
        <Container>
            <PostStyle>
                {posts.map(post =>
                    <PostItem post={post} />
                )}
            </PostStyle>
        </Container>
    )
}