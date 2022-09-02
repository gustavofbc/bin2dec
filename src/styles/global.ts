import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #2E384D;
    --black-300: #1F2729;
    --black-900: #171D1F;
    --white: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Chakra Petch', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }


  main {
    height: 100vh;
    background: var(--background);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;
