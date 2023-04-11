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
            justify-content: space-between;
            align-items: center;
            padding-top: 45px;
        }
    }

    .user__tasks {
        width: 95%;
        margin: 0 auto;

        h3 {
            font-size: var(--title-1);
            margin: 47px 0 23px;
        }

        p {
            font-size: var(--title-2);
            font-weight: 400;
        }
    }

    @media (min-width: 1024px){
        .user__container {
            div {
                width: 700px;
            }
        }

        .user__tasks{
            width: 700px;
        }
    }
`