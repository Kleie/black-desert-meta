import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { client } from "./data/apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
