import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Mona Sans';
    src: url('/fonts/mona-sans-1.0/MonaSans.woff2') format('woff2 supports variations'),
    url('/fonts/mona-sans-1.0/MonaSans.woff2') format('woff2-variations');
    font-weight: 200 900;
    font-stretch: 75% 125%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  html {
    font-family: 'Mona Sans', 'sans-serif';
    color: ${({theme}) => theme.colors.primary};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul,
  ol{
    list-style: none;
    padding: 0;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary};
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;