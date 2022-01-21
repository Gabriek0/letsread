import styled from 'styled-components';
import { darken } from 'polished';

export const PostStyle = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    min-height: 1160px;

    list-style: none;

    margin-top: 5rem;
    
    li {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        padding: 1rem 2rem;

        width: 30rem;
        position: relative;
    }

    img {
        align-items: center;
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
        line-height: 1.8;
        text-align: justify;
        word-wrap: break-word;
    };

    button {
        left: 1;
        bottom: 0;
        border: 0;
        border-radius: 0.2rem;
        outline: none;
        padding: 0.5rem 1rem;
        width: 35%;
        font-weight: 500;
        color: #fff;
        background: #fc931e;
        margin-top: 2rem;
        cursor: pointer;
        transition: color 0.4s;

        &:hover {
            background: ${darken(0.1, "#fc931e")}
        }
    }
`

export const Container = styled.div`
    padding: 0 4rem;
    `