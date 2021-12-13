import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  Web3ReactProvider,
  UnsupportedChainIdError,
  useWeb3React,
} from "@web3-react/core";
import getLibrary from "./utils/getLibrary";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
