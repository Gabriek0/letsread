import styled from 'styled-components';
import { darken } from 'polished';



export const PostStyle = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.3rem;
    list-style: none;
    margin-top: 5rem;

    li {
        display: flex;
        flex-direction: column;
        height: 50%;
        padding: 1rem;

    }

    img {
        align-self: center;
        height: 20rem;
        width: 100%;
    }

    h2, h5 {
        padding: 0.5rem;
        color: var(--dimgray);
    }

    h2 { 
        text-align: center;
        font-weight: 500;
    }

    h5 {
        text-align: left;
        padding-left: 3.5rem;
        opacity: 0.7;
        font-weight: 400;
    }

    p {
        color: var(--gray);
        text-align: justify;
    };

    span {
        color: blue;
        margin-top: 1rem;
        cursor: pointer;
        transition: color 0.4s;

        &:hover {
            color: ${darken(0.4, "#0920fd")}
        }
    }
`

export const Container = styled.div`
    padding: 0 4rem
`