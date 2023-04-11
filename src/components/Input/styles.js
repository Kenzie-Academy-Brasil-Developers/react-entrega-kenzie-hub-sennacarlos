import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        font-size: var(--text-1);
        font-weight: 400;
        margin-bottom: 15px;
    }

    input {
        margin-bottom: 26px; 
    }
    
    p {
        color: var(--negative);
        font-size: var(--text-1);
        font-weight: 400;
        margin-top: -1rem;
        margin-bottom: 0.7rem
    }
`