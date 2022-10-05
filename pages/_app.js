import "../styles/globals.css";
import { Provider, useDispatch } from "react-redux";
import store from "../store";
import { React, Component } from "react";
import { RootApp } from "../components/RootApp";
import AuthService from "../services/AuthService";
import {
  selectActiveUser,
  selectIsAuthenticated,
} from "../store/auth/selectors";
import Head from "next/head";
import { getActiveUser } from "../store/auth";
import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => {
    const Header = import("../components/Navbar");
    return Header;
  },
  { ssr: false }
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>

      <Provider store={store}>
        <RootApp>
          <Navbar />
          <Component {...pageProps} />
        </RootApp>
      </Provider>
    </>
  );
};

export default MyApp;
