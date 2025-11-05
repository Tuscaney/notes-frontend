import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "react-oidc-context";
import { WebStorageStateStore } from "oidc-client-ts";


const REGION = "us-east-2";
const USER_POOL_ID = "us-east-2_xfTkcurEJ";
const APP_CLIENT_ID = "77877osiilm56dbcusgr7tmkqg";

const cognitoAuthConfig = {
  authority: `https://cognito-idp.${REGION}.amazonaws.com/${USER_POOL_ID}`,
  client_id: APP_CLIENT_ID,
  redirect_uri: "http://localhost:5173",
  post_logout_redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "openid email profile",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  onSigninCallback() {
    // Strip ?code & ?state after successful login so refreshes are clean
    window.history.replaceState({}, document.title, "/");
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider {...cognitoAuthConfig}>
    <App />
  </AuthProvider>
);
