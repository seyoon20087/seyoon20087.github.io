import CommonPage from "../components/CommonPage";
import { Redirect } from "@reach/router";
import React, { useContext } from "react";
import { BrowserContext } from "../components/BrowserContext";
import Head from "../components/Head";

function RedirectToHome() {
  const isBrowserLoaded = useContext(BrowserContext);

  return (
    <CommonPage>
      {!isBrowserLoaded ? (
        <Head>
          <noscript>{`<meta http-equiv="refresh" content="0;url=/"/>`}</noscript>
        </Head>
      ) : (
        <Redirect to="/" />
      )}
    </CommonPage>
  );
}

export default RedirectToHome;
