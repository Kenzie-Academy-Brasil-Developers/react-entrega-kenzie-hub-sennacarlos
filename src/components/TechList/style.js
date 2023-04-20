import styled from "styled-components";

export const StyledTechList = styled.ul`
    background-color: var(--grey-3);
    height: 100%;
    border-radius: var(--radius-default);
    padding: 23px 22px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 49px;
        padding: 0 22px;

        background-color: var(--grey-4);
        border-radius: var(--radius-default);

        cursor: pointer;

        h3 {
            font-size: var(--title-2);
        }

        p {
            font-size: var(0.75rem);
            font-weight: 400;
            color: var(--grey-1);
        }
    }

    li:hover {
        background-color: var(--grey-2);
    }
`