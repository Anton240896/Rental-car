import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`




body {
  margin: 0;
  background-color: white;
}


ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}




h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
};

img {
    display: block;
    max-width: 100%;
    height: auto;
}
`;

export default GlobalStyles;
