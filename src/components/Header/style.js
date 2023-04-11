import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 72px;
    border-bottom: 1px solid var(--grey-3);

    nav {
        width: 95%;
        padding: 18px 0;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            width: 60px;

            font-size: var(--text-1);
            font-weight: 600;

            color: var(--grey-0);
            background-color: var(--grey-3);
        }

    }

    @media (min-width: 1024px) {
        nav {
            width: 700px;
            padding: 12px 0;

            button {
                width: 70px;
            }
        }
    }
`