import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Checkout from "./components/pages/Checkout";
import store from "./app/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// ReactDOM.render(<App />, document.getElementById("root"));
const rootElement = document.getElementById("root");
render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  rootElement
);
