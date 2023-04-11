import styled from "styled-components";

export const StyledRegiserPage = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;

        button {
            width: 80px;
            
            font-size: var(--text-1);
            font-weight: 600;

            color: var(--grey-0);
            background-color: var(--grey-3);
        }
    }

    .container__Form--register {
        display: flex;
        flex-direction: column;

        margin-top: 20px;

        width:  95%;
        height: 100%;
        padding: 33px 16px;

        background-color: var(--grey-3);

        border-radius: var(--radius-default);

        margin-bottom: 30px;

        h3 {
            font-size: var(--title-1);
            
            align-self: center;
        }

        span {
            align-self: center;

            font-size: var(--text-1);
            font-weight: 600;

            color: var(--grey-1);

            margin: 22px 0 22px 0
        }

        form {
            display: flex;
            flex-direction: column;
            button {
                width: 100%;

                font-size: var(--title-2);
                font-weight: 500;

                color: var(--grey-0);
                background-color: var(--color-primary-negative);

                margin-top: 35px
            }

            label {
                font-size: var(--text-1);
                font-weight: 400;
                margin-bottom: 15px;
            }

            select {
                height: 38px;
                padding: 0 16px;

                border-radius: var(--radius-default);

                color: var(--grey-1);
                background-color: var(--grey-2);

                outline: none;
            }

            .errorMessage {
                color: var(--negative);
                font-size: var(--text-1);
                font-weight: 400;
                margin-top: 0.6rem;
            }
        }
    }

    @media (min-width: 1024px) {
        header {
            width: 389px;

            margin-top: 30px;
        }
        .container__Form--register {
            height: 100%;
            width: 389px;

            form {
                select {
                    height: 48px;
                }
            }
        }
    }
`
