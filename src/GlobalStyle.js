import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    :root {
        --black-0: #000000;
        --black-1: #111111;
        --black-2: #222222;
        --black-3: #333333;
        --black-4: #444444;
        --black-5: #555555;
        --white-0: #FFFFFF;
        --white-1: #CCCCCC;
        --white-2: #F8F7F4;
        --white-3: #e5e5e5;

        --green: #86ffc6;
        --orange: orange;

        --transparent-1: rgba(225, 225 , 225, 0.1);
        --transparent-2: rgba(225, 225 , 225, 0.275);
        --transparent-3: rgba(225, 225 , 225, 0.3);
        --transparent-3: rgba(225, 225 , 225, 0.75);
        --transparent-5: rgba(0, 0 , 0, 0.5);

        --font: 'Inter', sans-serif;

        --fs-xxs: 12px;
        --fs-xs: 13px;
        --fs-sm: 14px;
        --fs-md: 16px;
        --fs-lg: 18px;
        --fs-xl: 20px;
        --fs-xxl: 24px;

        --spacing-xxs: 4px;
        --spacing-xs: 8px;
        --spacing-sm: 12px;
        --spacing-md: 16px;
        --spacing-lg: 24px;
        --spacing-xl: 32px;
        --spacing-xxl: 64px;

        --border-xs: 2px;
        --border-sm: 5px;
        --border-md: 10px;
        --border-lg: 15px;

        --site-max-width: 1300px;

        --transition: .3s ease;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: var(--font);
        color: var(--black-3);
    }

    a {
        text-decoration: none;
        font-family: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
        font-family: inherit;
        font-size: inherit;
        background: transparent;
        color: inherit;
        border: inherit;
        outline: none
    }

    form, label, input, textarea {
        font-family: inherit;
        font-size: inherit;
    }
`;

export default GlobalStyle;