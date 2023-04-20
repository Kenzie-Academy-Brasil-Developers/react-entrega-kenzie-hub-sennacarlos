import styled from "styled-components";

export const StyledEditAndDeleteTech = styled.div `
    width: 97%;
    height: 360px;

    background-color: var(--grey-3);
    border-radius: var(--radius-default);

    margin: 0 auto;
    display: flex;
    flex-direction: column;

    header {
        background-color: var(--grey-2);

        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 50px;
        padding: 0 20px;
        width: 100%;

        h3 {
            font-size: .875rem;
        }

        p {
            font-size: var(--title-2);
            color: var(--grey-1);

            cursor: pointer;
        }
    }

    form {
        display: flex;
        flex-direction: column;

        padding: 24px 20px;
        gap: 20px;

        label {
            font-size: var(--text-1);
            font-weight: 400;
        }

        div {
            display: flex;
            justify-content: space-between;
            gap: 12px;

            margin-top: 20px;

            .saveTech {
                width: 60%;

                background-color: var(--color-primary-negative);
                color: var(--grey-0);

                font-size: var(--title-2);
                font-weight: 500;
            }

            .delTech {
                width: 40%;

                background-color: var(--grey-1);
                color: var(--grey-0);

                font-size: var(--title-2);
                font-weight: 500;
            }
        }


    }

    @media (min-width: 1024px) {
        width: 400px;
        height: 380px;
    }
`