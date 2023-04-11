import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --sucess: #3FE864;
        --negative: #E83F5B;

        --title-1: 1.125rem;
        --title-2: 1rem;
        --text-1: 0.75rem;

        --radius-default: 4px;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: var(--radius-default);

        height: 38px ;
    }

    input {
        color: var(--grey-1);
        background-color: var(--grey-2);

        border: 1px solid transparent;
        border-radius: var(--radius-default);

        height: 38px;
        padding: 0 16px;

        outline: none;
    }

    input:focus {
        border: 1px solid var(--grey-0);

        color: var(--grey-0);
    }

    body {
        background: var(--grey-4);
        color: var(--grey-0)
    }

    .logoKenzieHub {
        font-size: 24px;
        font-weight: 700;
        color: var(--color-primary)
    }

    @media (min-width: 1024px) {
        .container {
            max-width: 900px;
            margin: 0 auto;
        }

        input {
            height: 48px;
        }

        button {
            height: 48px;
        }
    }
`