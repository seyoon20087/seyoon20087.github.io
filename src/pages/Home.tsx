// import React, { useEffect } from "react";
// import Head from '@docusaurus/Head';
// import LayoutProviders from '@theme/LayoutProviders';
// import LayoutHead from '@theme/LayoutHead';
// import Layout from "@theme/Layout";
// import Link from "@docusaurus/Link";
// import { Link } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../node_modules/bs5-react-elements/dist/bs5-react-elements";
// import {Tooltip} from "bs5-react-elements";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import "../css/darkmode.css";
import "../css/custom.css";
import { Helmet } from "react-helmet-async";
import React from "react";
import { isRegExp } from "util/types";

function Home() {
/*
  useEffect(() => {/*
    !function(){function e(e){document.documentElement.setAttribute("data-theme",e)}var t=function(){var e=null;try{e=localStorage.getItem("theme")}catch(e){}return e}();null!==t?e(t):window.matchMedia("(prefers-color-scheme: dark)").matches?e("dark"):(window.matchMedia("(prefers-color-scheme: light)").matches,e("light"))}()
    document.title = "seyoon20087.github.io";  
  }, []);
*/
    const [isBrowserLoaded, setIsBrowserLoaded] = React.useState(false);
    React.useEffect(() => {
      setIsBrowserLoaded(true);
    })
    return (
      <>
      {/*<LayoutProviders>
      <LayoutHead title="" />*/}
      <Helmet>
        <html lang="en" dir="ltr" />
        <title>{"seyoon20087.github.io"}</title>
        <meta name="description" content="seyoon20087.github.io" />
      </Helmet>
        <div className="container">
  <br />
  <br />
  <br />
  <h1>seyoon20087</h1>
  <hr />
  <p>
    {"Below you'll find the projects that I am currently owning on GitHub."}
  </p>
  {/*<Link href="https://github.com/seyoon20087/" target="_blank" rel="noopener">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzE5MTcxNzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUwLDEyNUExMjUsMTI1LDAsMSwxLDEyNSwwLDEyNSwxMjUsMCwwLDEsMjUwLDEyNVpNMTI1LDQwLjM3QTg2Ljc4LDg2Ljc4LDAsMCwwLDk3LjU3LDIwOS40OGM0LjM0LjgsNS45Mi0xLjg4LDUuOTItNC4xOCwwLTIuMDYtLjA3LTcuNTItLjExLTE0Ljc2LTI0LjE0LDUuMjUtMjkuMjMtMTEuNjMtMjkuMjMtMTEuNjMtNC0xMC05LjY0LTEyLjY5LTkuNjQtMTIuNjktNy44OC01LjM5LjYtNS4yOC42LTUuMjgsOC43MS42MSwxMy4yOSw4Ljk0LDEzLjI5LDguOTQsNy43NCwxMy4yNiwyMC4zMSw5LjQ0LDI1LjI1LDcuMjEuNzktNS42LDMtOS40Myw1LjUxLTExLjYtMTkuMjctMi4xOS0zOS41Mi05LjYzLTM5LjUyLTQyLjg4YTMzLjU1LDMzLjU1LDAsMCwxLDguOTMtMjMuMjljLS44OS0yLjE5LTMuODctMTEsLjg1LTIzLDAsMCw3LjI4LTIuMzQsMjMuODYsOC44OWE4Mi4yOCw4Mi4yOCwwLDAsMSw0My40NSwwYzE2LjU3LTExLjIzLDIzLjg0LTguODksMjMuODQtOC44OSw0LjczLDExLjk0LDEuNzUsMjAuNzcuODYsMjNhMzMuNSwzMy41LDAsMCwxLDguOTIsMjMuMjljMCwzMy4zMy0yMC4yOSw0MC42Ny0zOS42Miw0Mi44MiwzLjEyLDIuNjcsNS44OSw4LDUuODksMTYuMDYsMCwxMS42MS0uMSwyMS0uMSwyMy44MSwwLDIuMzIsMS41Niw1LDYsNC4xN0E4Ni43OSw4Ni43OSwwLDAsMCwxMjUsNDAuMzdaIi8+PC9zdmc+" width="40" height="40" draggable="false" />
    </Link>
    {" "}
    <Link href="https://gitlab.com/seyoon20087/" target="_blank" rel="noopener">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YzNmUyYjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUwLDEyNUExMjUsMTI1LDAsMSwxLDEyNSwwLDEyNSwxMjUsMCwwLDEsMjUwLDEyNVpNNzIuNTUsNDQuNjJhMy40OSwzLjQ5LDAsMCwwLTYuNTgsMEw0Ni4zMiwxMDUuNDNIOTIuMjRTNzIuNTUsNDQuNjIsNzIuNTUsNDQuNjJaTTM2LjI2LDEzNmE3LDcsMCwwLDAsMi40Nyw3LjY1bDg2LjI0LDY0TDQ2LjI4LDEwNS40M1pNOTIuMiwxMDUuNDMsMTI1LDIwNy43bDMyLjgtMTAyLjI3Wk0yMTMuNzUsMTM2bC0xMC0zMC42MUwxMjUsMjA3LjdsODYuMjQtNjRBNyw3LDAsMCwwLDIxMy43NSwxMzZaTTE4NCw0NC42MmEzLjQ4LDMuNDgsMCwwLDAtNi41NywwbC0xOS42OSw2MC44MUgyMDMuN1oiLz48L3N2Zz4=" width="40" height="40" draggable="false" />
    </Link>*/}
      <a href="https://github.com/seyoon20087/" target="_blank" rel="noopener noreferrer">
      <OverlayTrigger
      key="top"
      placement="top"
      overlay={
        <Tooltip id="ef1d6b11-2e8e-4ab0-b72b-d751ad571ef8">
          {"View profile on GitHub.com"}
        </Tooltip>
      }
    >
        {isBrowserLoaded ? <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzE5MTcxNzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ1LjksMTI1QTEyMC45LDEyMC45LDAsMSwxLDEyNSw0LjEsMTIwLjksMTIwLjksMCwwLDEsMjQ1LjksMTI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI1MCwxMjVBMTI1LDEyNSwwLDEsMSwxMjUsMCwxMjUsMTI1LDAsMCwxLDI1MCwxMjVaTTEyNSw0MC4zN0E4Ni43OCw4Ni43OCwwLDAsMCw5Ny41NywyMDkuNDhjNC4zNC44LDUuOTItMS44OCw1LjkyLTQuMTgsMC0yLjA2LS4wNy03LjUyLS4xMS0xNC43Ni0yNC4xNCw1LjI1LTI5LjIzLTExLjYzLTI5LjIzLTExLjYzLTQtMTAtOS42NC0xMi42OS05LjY0LTEyLjY5LTcuODgtNS4zOS42LTUuMjguNi01LjI4LDguNzEuNjEsMTMuMjksOC45NCwxMy4yOSw4Ljk0LDcuNzQsMTMuMjYsMjAuMzEsOS40NCwyNS4yNSw3LjIxLjc5LTUuNiwzLTkuNDMsNS41MS0xMS42LTE5LjI3LTIuMTktMzkuNTItOS42My0zOS41Mi00Mi44OGEzMy41NSwzMy41NSwwLDAsMSw4LjkzLTIzLjI5Yy0uODktMi4xOS0zLjg3LTExLC44NS0yMywwLDAsNy4yOC0yLjM0LDIzLjg2LDguODlhODIuMjgsODIuMjgsMCwwLDEsNDMuNDUsMGMxNi41Ny0xMS4yMywyMy44NC04Ljg5LDIzLjg0LTguODksNC43MywxMS45NCwxLjc1LDIwLjc3Ljg2LDIzYTMzLjUsMzMuNSwwLDAsMSw4LjkyLDIzLjI5YzAsMzMuMzMtMjAuMjksNDAuNjctMzkuNjIsNDIuODIsMy4xMiwyLjY3LDUuODksOCw1Ljg5LDE2LjA2LDAsMTEuNjEtLjEsMjEtLjEsMjMuODEsMCwyLjMyLDEuNTYsNSw2LDQuMTdBODYuNzksODYuNzksMCwwLDAsMTI1LDQwLjM3WiIvPjwvc3ZnPg==" width="40" height="40" draggable="false" alt="View profile on GitHub.com" /> :
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzE5MTcxNzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ1LjksMTI1QTEyMC45LDEyMC45LDAsMSwxLDEyNSw0LjEsMTIwLjksMTIwLjksMCwwLDEsMjQ1LjksMTI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI1MCwxMjVBMTI1LDEyNSwwLDEsMSwxMjUsMCwxMjUsMTI1LDAsMCwxLDI1MCwxMjVaTTEyNSw0MC4zN0E4Ni43OCw4Ni43OCwwLDAsMCw5Ny41NywyMDkuNDhjNC4zNC44LDUuOTItMS44OCw1LjkyLTQuMTgsMC0yLjA2LS4wNy03LjUyLS4xMS0xNC43Ni0yNC4xNCw1LjI1LTI5LjIzLTExLjYzLTI5LjIzLTExLjYzLTQtMTAtOS42NC0xMi42OS05LjY0LTEyLjY5LTcuODgtNS4zOS42LTUuMjguNi01LjI4LDguNzEuNjEsMTMuMjksOC45NCwxMy4yOSw4Ljk0LDcuNzQsMTMuMjYsMjAuMzEsOS40NCwyNS4yNSw3LjIxLjc5LTUuNiwzLTkuNDMsNS41MS0xMS42LTE5LjI3LTIuMTktMzkuNTItOS42My0zOS41Mi00Mi44OGEzMy41NSwzMy41NSwwLDAsMSw4LjkzLTIzLjI5Yy0uODktMi4xOS0zLjg3LTExLC44NS0yMywwLDAsNy4yOC0yLjM0LDIzLjg2LDguODlhODIuMjgsODIuMjgsMCwwLDEsNDMuNDUsMGMxNi41Ny0xMS4yMywyMy44NC04Ljg5LDIzLjg0LTguODksNC43MywxMS45NCwxLjc1LDIwLjc3Ljg2LDIzYTMzLjUsMzMuNSwwLDAsMSw4LjkyLDIzLjI5YzAsMzMuMzMtMjAuMjksNDAuNjctMzkuNjIsNDIuODIsMy4xMiwyLjY3LDUuODksOCw1Ljg5LDE2LjA2LDAsMTEuNjEtLjEsMjEtLjEsMjMuODEsMCwyLjMyLDEuNTYsNSw2LDQuMTdBODYuNzksODYuNzksMCwwLDAsMTI1LDQwLjM3WiIvPjwvc3ZnPg==" width="40" height="40" draggable="false" alt="View profile on GitHub.com" title="View profile on GitHub.com" />}
        </OverlayTrigger>
      </a>
    {"  "}
      <a href="https://gitlab.com/seyoon20087/" target="_blank" rel="noopener noreferrer">
      <OverlayTrigger
      key="top"
      placement="top"
      overlay={
        <Tooltip id="a0f67d64-28ba-497a-8735-fab4f6281e2c">
          {"View profile on GitLab.com"}
        </Tooltip>
      }
    >
        {isBrowserLoaded ? <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6I2YzNmUyYjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ1LjksMTI1QTEyMC45LDEyMC45LDAsMSwxLDEyNSw0LjEsMTIwLjksMTIwLjksMCwwLDEsMjQ1LjksMTI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI1MCwxMjVBMTI1LDEyNSwwLDEsMSwxMjUsMCwxMjUsMTI1LDAsMCwxLDI1MCwxMjVaTTcyLjU1LDQ0LjYyYTMuNDksMy40OSwwLDAsMC02LjU4LDBMNDYuMzIsMTA1LjQzSDkyLjI0UzcyLjU1LDQ0LjYyLDcyLjU1LDQ0LjYyWk0zNi4yNiwxMzZhNyw3LDAsMCwwLDIuNDcsNy42NWw4Ni4yNCw2NEw0Ni4yOCwxMDUuNDNaTTkyLjIsMTA1LjQzLDEyNSwyMDcuN2wzMi44LTEwMi4yN1pNMjEzLjc1LDEzNmwtMTAtMzAuNjFMMTI1LDIwNy43bDg2LjI0LTY0QTcsNywwLDAsMCwyMTMuNzUsMTM2Wk0xODQsNDQuNjJhMy40OCwzLjQ4LDAsMCwwLTYuNTcsMGwtMTkuNjksNjAuODFIMjAzLjdaIi8+PC9zdmc+" width="40" height="40" draggable="false" alt="View profile on GitLab.com" /> :
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6I2YzNmUyYjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ1LjksMTI1QTEyMC45LDEyMC45LDAsMSwxLDEyNSw0LjEsMTIwLjksMTIwLjksMCwwLDEsMjQ1LjksMTI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI1MCwxMjVBMTI1LDEyNSwwLDEsMSwxMjUsMCwxMjUsMTI1LDAsMCwxLDI1MCwxMjVaTTcyLjU1LDQ0LjYyYTMuNDksMy40OSwwLDAsMC02LjU4LDBMNDYuMzIsMTA1LjQzSDkyLjI0UzcyLjU1LDQ0LjYyLDcyLjU1LDQ0LjYyWk0zNi4yNiwxMzZhNyw3LDAsMCwwLDIuNDcsNy42NWw4Ni4yNCw2NEw0Ni4yOCwxMDUuNDNaTTkyLjIsMTA1LjQzLDEyNSwyMDcuN2wzMi44LTEwMi4yN1pNMjEzLjc1LDEzNmwtMTAtMzAuNjFMMTI1LDIwNy43bDg2LjI0LTY0QTcsNywwLDAsMCwyMTMuNzUsMTM2Wk0xODQsNDQuNjJhMy40OCwzLjQ4LDAsMCwwLTYuNTcsMGwtMTkuNjksNjAuODFIMjAzLjdaIi8+PC9zdmc+" width="40" height="40" draggable="false" alt="View profile on GitLab.com" title="View profile on GitLab.com" /> }
        </OverlayTrigger>
      </a>
  <br />
  <br />
  <p>
    <a href="//github.com/seyoon20087/AnonymousRedirect/"
      target="_blank" rel="noopener noreferrer"
      className="btn btn-primary"
      role="button"
    >
      {"AnonymousRedirect"}
    </a>
    <br />
    <br />
    {"Very simple HTML page that is used for anonymous redirect"}
  </p>
  <br />
  <br />
  <p>
    <a href="//github.com/seyoon20087/OSRestoreX/"
      target="_blank" rel="noopener noreferrer"
      className="btn btn-primary"
      role="button"
    >
      {"OSRestoreX"}
    </a>
    <br />
    <br />{"A semi-restore Alternative for iOS 10."}
  </p>
  <br />
  <br />
  <p>
    <a href="//github.com/seyoon20087/macos-downloader/"
      target="_blank" rel="noopener noreferrer"
      className="btn btn-primary"
      role="button"
    >
      {"macos-downloader"}
    </a>
    <br />
    <br />
    {"Command line tool for downloading macOS installers and beta updates"}
  </p>
  <br />
  <br />
  <br />
</div>
{/*</LayoutProviders>*/}
</>
    );
}

export default Home;