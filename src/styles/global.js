import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  colors: {
    blue: '#011fa4',
    white: 'white',
  },
  font: {
    sans: 'Roboto, sans-serif'
  },
  fontWeight: {
    h1: '900',
    h2: '700',
    p: '700',
    a: '700'
  },
  fontSize: {
    h1: '3.5rem',
    h2: '2.2rem',
    p: '1.6rem',
    a: '1.7rem'
  },
  lineHeight: {
    body:'1.6',
    headings: '1.2'
  },
  padding: {
    h1: '29px 0',
    h2: '40px 0',
    p: '12px 0'
  }
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.sans};
    color: ${({ theme }) => theme.colors.white};
  }
  body {
    line-height: ${({ theme }) => theme.lineHeight.body};
    letter-spacing: 0;
    background-color: #011fa4;
    display: flex;
    justify-content: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    line-height: ${({ theme }) => theme.lineHeight.headings};
  }
`