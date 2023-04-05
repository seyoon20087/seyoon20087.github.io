import CommonPage from "../components/CommonPage";
import { navigate } from "@reach/router";
import React, { useContext } from "react";
import { BrowserContext } from "../components/BrowserContext";
import Head from "../components/Head";

function RedirectToHome() {
  React.useEffect(() => {
    // setTimeout(() => {
    navigate("/", { replace: true });
    // }, 0);
  });

  const isBrowserLoaded = useContext(BrowserContext);

  return (
    <CommonPage>
      {!isBrowserLoaded ? (
        <Head>
          <noscript>{`<meta http-equiv="refresh" content="0;url=/"/>`}</noscript>
        </Head>
      ) : null}
    </CommonPage>
  );
}

export default RedirectToHome;
