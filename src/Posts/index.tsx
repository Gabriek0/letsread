import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../PostContext';
import { api } from '../services/api';
import { Container } from './styles';
import { PostStyle } from './styles';

export function Post() {
    const { posts } = useContext(PostContext);

    return (
        <Container>
            <PostStyle>
                {posts.map(post => (
                    <li key={post.id}>
                        <img src={post.image} alt={post.title}></img>
                        <h2>{post.title}</h2>
                        <h5>{Intl.DateTimeFormat('pt-BR').format(new Date(post.createAt))}</h5>
                        <p>{post.description}</p>
                        <span>Leia mais</span>
                    </li>
                ))}
            </PostStyle>
        </Container>
    )
}