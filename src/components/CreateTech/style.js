import styled from "styled-components";

export const StyledCreateTech = styled.div`
    width: 97%;
    height: 360px;

    background-color: var(--grey-3);
    border-radius: var(--radius-default);

    margin: 0 auto;

    header {
        background-color: var(--grey-2);

        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 50px;
        padding: 0 20px;
        

        h3 {
            font-size: .875rem;
        }

        p {
            font-size: var(--title-2);
            color: var(--grey-1);

            cursor: pointer;
        }
    }

    .container__createTech {
        margin-top: 19px;
        display: flex;
        flex-direction: column;

        padding: 0 20px;

        form {
            display: flex;
            flex-direction: column;
            
            gap: 12px;

            label {
                font-size: var(--text-1);
                font-weight: 400;
                margin-bottom: 15px;
            }

            button {
                margin: 25px 0;
                background-color: var(--color-primary);
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