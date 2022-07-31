import CommonPage from "../components/CommonPage";
import { useNavigate } from "@reach/router";
import React, { useContext } from "react";
import { BrowserContext } from "../components/BrowserContext";

function RedirectToHome() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/", { replace: true });
  });

  const isBrowserLoaded = useContext(BrowserContext);

  return (
    <CommonPage>
      {!isBrowserLoaded ? (
        <meta httpEquiv="refresh" content="0; url=/" />
      ) : null}
    </CommonPage>
  );
}

export default RedirectToHome;
