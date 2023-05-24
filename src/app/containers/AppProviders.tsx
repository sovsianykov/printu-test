import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { store } from "../../store/store";

interface Props {
  children?: JSX.Element | JSX.Element[]
}

export const AppProviders: FunctionComponent<Props> = ({ children }) => (
  <BrowserRouter>
    <Provider store={store}>
          <CssBaseline />
          {children}
    </Provider>
  </BrowserRouter>
);

