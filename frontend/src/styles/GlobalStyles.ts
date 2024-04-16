import { createGlobalStyle, DefaultTheme } from 'styled-components'
import reset from 'styled-reset'
import { colors, sizes } from './theme'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        font-family: 'Pretendard', Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
    * {
        padding: 0;
        box-sizing: border-box;
        font-family: 'Pretendard', Arial, Helvetica, sans-serif;
    }
    html, body {
        margin: 0;
        padding: 0;
        font-weight: 400;
        line-height: 1.1;
        background-color: #f4f4f4;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
            background: transparent;
            -webkit-appearance: none;
        }
    }

    #root {
        width: 100%;
        min-width: ${sizes.minWidth};
        max-width: ${sizes.maxWidth};
        min-height: 100dvh;
        margin: 0 auto;
        background: ${({ theme }: { theme: DefaultTheme }) =>
          theme.color.background};
        color: ${({ theme }: { theme: DefaultTheme }) => theme.color.text};
        @media only screen and (min-width: 430px) {
            width: 430px;
        }
        @media only screen and (min-width: 600px) {
            width: 375px;
        }
    }
    a {
        outline: none;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button {
        font-size: 16px;
        border: none;
        cursor: pointer;
        background: none;
        &:disabled {
            background-color: #CACFD9;
        }
    }
    input {
        font-size: 1em;
        outline: none;
        color: ${({ theme }: { theme: DefaultTheme }) => theme.color.text};
        &:focus {
            outline: none;
        }
        &::placeholder {
            color: ${colors.gray04};
            font-weight: 500;
        }
    }
`
