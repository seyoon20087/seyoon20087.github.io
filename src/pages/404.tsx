import CommonPage from "../components/CommonPage";
import { useNavigate } from "@reach/router";
import React, { useContext } from "react";
import { BrowserContext } from "../components/BrowserContext";
import Head from "../components/Head";

function RedirectToHome() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/", { replace: true });
  });

  const isBrowserLoaded = useContext(BrowserContext);

  return (
    <CommonPage>
      {!isBrowserLoaded ? (
        <Head>
          <noscript>
            <meta httpEquiv="refresh" content="0; url=/" />
          </noscript>
        </Head>
      ) : null}
    </CommonPage>
  );
}

export default RedirectToHome;
