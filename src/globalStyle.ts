/** @format */

import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
 :root {
  --backgroundColor: #191919;
  --colorContainer: #303030;
  --blue: #65B2DD;
  --yellow: #C8B934;
  --white: #E5E5E5;
  --red: #C83D34;
 }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 760px) {
    font-size: 87.5%
  }
}

a {
  text-decoration: none;
}

body{
  background: var(--backgroundColor);
  color: #E5E5E5;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

button {
  cursor: pointer;
}
[disable] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
