import styled from "styled-components";

export const StyledDashboardPage = styled.main`
    width: 100%;
    
   
    .user__container {
        border-bottom: 1px solid var(--grey-3);
        height: 118px;

        div {
            width: 95%;
            margin: 0 auto;
            
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 30px;
        }
    }

    .user__tasks {
        width: 95%;
        margin: 0 auto;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin: 20px 0 20px 0;

            h3 {
                font-size: var(--title-2);
                font-weight: 600;
            }
            
            button {
                width: 32px;
                height: 32px;

                border-radius: var(--radius-default);
                background-color: var(--grey-3);
                color: var(--grey-0);

                font-size: var(--title-2);
            }
        }
    }

    @media (min-width: 1024px){
        .user__container {
            div {
                width: 800px;
                flex-direction: row;
                justify-content: space-between;

                padding-top: 45px;
            }
        }

        .user__tasks{
            width: 800px;
        }
    }
`