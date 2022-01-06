import styled from 'styled-components';

export const Container = styled.header`
    background: #fff;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 3rem;

    
    display: flex;
    justify-content: space-between;

    img {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0.5rem;
    }

    span {
        color: #fc931e;
    }

    h1 {
        display: flex;
        align-items: center;
    }

    button {
        font-size: 1rem;
        background: var(--black);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;
        color: var(--whitesmoke);
        font-weight: 500;
    
        &:hover {
            filter: brightness(0.7)
        }
    }



`;