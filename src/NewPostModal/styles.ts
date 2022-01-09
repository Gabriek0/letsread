import styled from "styled-components";

export const ModalStyle = styled.form`
    button[type="submit"] {
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

    img {
        height: 1rem;
        width: 1rem;
    }
    }
`;