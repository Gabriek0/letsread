import styled from 'styled-components';
import { darken } from 'polished';

export const PostStyle = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    list-style: none;
    margin-top: 5rem;
    
    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 1rem;

        height: 40rem; // Altura muda dinâmicamente conforme o tamanho do container pai
        width: 35rem;
        position: relative;
    }

    img {
        align-self: center;
        height: 50%;
        width: 50%;
    }
    
    h2, h5 {
        padding: 0.5rem;
        color: var(--dimgray);
    }
    
    h2 { 
        text-align: center;
        font-weight: 500;
        word-wrap: break-word;
    }
    
    h5 {
        text-align: center;
        opacity: 0.7;
        font-weight: 400;
    }
    
    p {
        color: var(--gray);
        text-align: justify;
        word-wrap: break-word;
    };

    span {
        left: 1;
        bottom: 0;
        color: blue;
        margin-top: 2rem;
        cursor: pointer;
        transition: color 0.4s;

        &:hover {
            color: ${darken(0.4, "#0920fd")}
        }
    }
`

export const Container = styled.div`
    padding: 0 4rem;
    height: 100%;
    `