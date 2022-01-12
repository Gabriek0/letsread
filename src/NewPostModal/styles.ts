import styled from "styled-components";

export const ModalStyle = styled.form`
    display: flex;
    flex-direction: column;


    input, textarea {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        margin-top: 1rem;

        font-weight: 400;
        font-size: 1rem;
    }

    button[type="submit"] {
        margin-top: 1rem;
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

    textarea {
        padding: 1.5rem
    }

    img {
        height: 1rem;
        width: 1rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 2rem
    }
    }
`;