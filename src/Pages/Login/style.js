import styled from "styled-components";

export const StyledLoginPage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container__Form {
        display: flex;
        flex-direction: column;

        margin-top: 20px;

        width:  95%;
        height: 464px;
        padding: 33px 16px;

        background-color: var(--grey-3);

        border-radius: var(--radius-default);

        h2 {
            font-size: var(--title-1);

            align-self: center;

            margin-bottom: 28px;
        }

        form {
            button {
                width: 100%;
                background-color: var(--color-primary);
                color: var(--grey-0);

                font-size: var(--title-2);
                font-weight: 500;
            }

            button:hover {
                background-color: var(--color-primary-focus);
            }
        }

        span {
            align-self: center;

            font-size: var(--text-1);
            font-weight: 600;

            color: var(--grey-1);

            margin: 34px 0 22px 0
        }

        .buttonRegister {
            background-color: var(--grey-1);
            color: var(--grey-0);

            border-radius: var(--radius-default);

            font-size: var(--title-2);
            font-weight: 500;

            height: 38px;
            width: 100%;

            text-align: center;
            padding-top: 10.5px;
        }
    }

    @media (min-width: 1024px) {
        .container__Form {
            width: 389px;
            height: 510px;

            .buttonRegister {
                height: 48px;
            }

            .buttonRegister:hover {
                background-color: var(--color-primary-focus);
            }
        }

    }
`