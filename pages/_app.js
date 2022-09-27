import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { React, Component } from "react";
import {RootApp} from '../components/RootApp'
import AuthService from "../services/AuthService";
import {
  selectActiveUser,
  selectIsAuthenticated,
} from "../store/auth/selectors";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <RootApp>
        <Component {...pageProps} />
      </RootApp>
    </Provider>
  );
};

export default MyApp;
