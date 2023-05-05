import React from "react";
import CommonPage from "../components/CommonPage";
import { Global, css } from "@emotion/react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BrowserContext } from "../components/BrowserContext";
import { useContext } from "react";
import { useId } from "react";
import BsCss from "../components/BsCss";

function Home() {
  const isBrowserLoaded = useContext(BrowserContext);
  const tooltipIds = [useId().replace(/:/g, "__"), useId().replace(/:/g, "__")];
  return (
    <React.Fragment>
      <CommonPage>
        <BsCss />
        <div className="container">
          <h1
            css={css`
              &&& {
                padding-top: 55px;
              }
            `}
          >
            {"seyoon20087"}
          </h1>
          <hr />
          <p>
            {
              "Below you'll find the projects that I am currently owning on GitHub."
            }
          </p>
          <a
            href="https://github.com/seyoon20087/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {isBrowserLoaded ? (
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={tooltipIds[0]}>
                    {"View profile on GitHub.com"}
                  </Tooltip>
                }
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzE5MTcxNzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ1LjksMTI1QTEyMC45LDEyMC45LDAsMSwxLDEyNSw0LjEsMTIwLjksMTIwLjksMCwwLDEsMjQ1LjksMTI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI1MCwxMjVBMTI1LDEyNSwwLDEsMSwxMjUsMCwxMjUsMTI1LDAsMCwxLDI1MCwxMjVaTTEyNSw0MC4zN0E4Ni43OCw4Ni43OCwwLDAsMCw5Ny41NywyMDkuNDhjNC4zNC44LDUuOTItMS44OCw1LjkyLTQuMTgsMC0yLjA2LS4wNy03LjUyLS4xMS0xNC43Ni0yNC4xNCw1LjI1LTI5LjIzLTExLjYzLTI5LjIzLTExLjYzLTQtMTAtOS42NC0xMi42OS05LjY0LTEyLjY5LTcuODgtNS4zOS42LTUuMjguNi01LjI4LDguNzEuNjEsMTMuMjksOC45NCwxMy4yOSw4Ljk0LDcuNzQsMTMuMjYsMjAuMzEsOS40NCwyNS4yNSw3LjIxLjc5LTUuNiwzLTkuNDMsNS41MS0xMS42LTE5LjI3LTIuMTktMzkuNTItOS42My0zOS41Mi00Mi44OGEzMy41NSwzMy41NSwwLDAsMSw4LjkzLTIzLjI5Yy0uODktMi4xOS0zLjg3LTExLC44NS0yMywwLDAsNy4yOC0yLjM0LDIzLjg2LDguODlhODIuMjgsODIuMjgsMCwwLDEsNDMuNDUsMGMxNi41Ny0xMS4yMywyMy44NC04Ljg5LDIzLjg0LTguODksNC43MywxMS45NCwxLjc1LDIwLjc3Ljg2LDIzYTMzLjUsMzMuNSwwLDAsMSw4LjkyLDIzLjI5YzAsMzMuMzMtMjAuMjksNDAuNjctMzkuNjIsNDIuODIsMy4xMiwyLjY3LDUuODksOCw1Ljg5LDE2LjA2LDAsMTEuNjEtLjEsMjEtLjEsMjMuODEsMCwyLjMyLDEuNTYsNSw2LDQuMTdBODYuNzksODYuNzksMCwwLDAsMTI1LDQwLjM3WiIvPjwvc3ZnPg=="
                  width="40"
                  height="40"
                  draggable="false"
                  alt="View profile on GitHub.com"
                />
              </OverlayTrigger>
            ) : (
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzE5MTcxNzt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQ1LjksMTI1QTEyMC45LDEyMC45LDAsMSwxLDEyNSw0LjEsMTIwLjksMTIwLjksMCwwLDEsMjQ1LjksMTI1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI1MCwxMjVBMTI1LDEyNSwwLDEsMSwxMjUsMCwxMjUsMTI1LDAsMCwxLDI1MCwxMjVaTTEyNSw0MC4zN0E4Ni43OCw4Ni43OCwwLDAsMCw5Ny41NywyMDkuNDhjNC4zNC44LDUuOTItMS44OCw1LjkyLTQuMTgsMC0yLjA2LS4wNy03LjUyLS4xMS0xNC43Ni0yNC4xNCw1LjI1LTI5LjIzLTExLjYzLTI5LjIzLTExLjYzLTQtMTAtOS42NC0xMi42OS05LjY0LTEyLjY5LTcuODgtNS4zOS42LTUuMjguNi01LjI4LDguNzEuNjEsMTMuMjksOC45NCwxMy4yOSw4Ljk0LDcuNzQsMTMuMjYsMjAuMzEsOS40NCwyNS4yNSw3LjIxLjc5LTUuNiwzLTkuNDMsNS41MS0xMS42LTE5LjI3LTIuMTktMzkuNTItOS42My0zOS41Mi00Mi44OGEzMy41NSwzMy41NSwwLDAsMSw4LjkzLTIzLjI5Yy0uODktMi4xOS0zLjg3LTExLC44NS0yMywwLDAsNy4yOC0yLjM0LDIzLjg2LDguODlhODIuMjgsODIuMjgsMCwwLDEsNDMuNDUsMGMxNi41Ny0xMS4yMywyMy44NC04Ljg5LDIzLjg0LTguODksNC43MywxMS45NCwxLjc1LDIwLjc3Ljg2LDIzYTMzLjUsMzMuNSwwLDAsMSw4LjkyLDIzLjI5YzAsMzMuMzMtMjAuMjksNDAuNjctMzkuNjIsNDIuODIsMy4xMiwyLjY3LDUuODksOCw1Ljg5LDE2LjA2LDAsMTEuNjEtLjEsMjEtLjEsMjMuODEsMCwyLjMyLDEuNTYsNSw2LDQuMTdBODYuNzksODYuNzksMCwwLDAsMTI1LDQwLjM3WiIvPjwvc3ZnPg=="
                width="40"
                height="40"
                draggable="false"
                alt="View profile on GitHub.com"
                title="View profile on GitHub.com"
              />
            )}
          </a>{" "}
          <a
            href="https://gitlab.com/seyoon20087/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {isBrowserLoaded ? (
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={tooltipIds[1]}>
                    {"View profile on GitLab.com"}
                  </Tooltip>
                }
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OS42NCA0OC44NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZhYTMyNzsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZjM2ZTJiOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNlMjQ0Mjk7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogIzI3Mjk2MTsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGVsbGlwc2UgY2xhc3M9ImNscy00IiBjeD0iMjQuODIiIGN5PSIyNC40MiIgcng9IjI0LjgyIiByeT0iMjQuNDIiLz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQwLjI4LDIxLjJsLS4wNC0uMTEtNC4zNS0xMS4zNWMtLjA5LS4yMi0uMjQtLjQxLS40NS0uNTQtLjItLjEzLS40NC0uMTktLjY4LS4xOC0uMjQsLjAxLS40NywuMS0uNjYsLjI1LS4xOSwuMTUtLjMyLC4zNi0uMzksLjU5bC0yLjk0LDloLTExLjlsLTIuOTQtOWMtLjA2LS4yMy0uMi0uNDQtLjM5LS41OS0uMTktLjE1LS40Mi0uMjQtLjY2LS4yNS0uMjQtLjAxLS40OCwuMDUtLjY4LC4xOC0uMiwuMTMtLjM2LC4zMi0uNDUsLjU0bC00LjM2LDExLjM3LS4wNCwuMTFjLS42MywxLjY0LS43LDMuNDMtLjIyLDUuMTIsLjQ4LDEuNjgsMS41LDMuMTcsMi45LDQuMjJoLjAycy4wNCwuMDQsLjA0LC4wNGw2LjY0LDQuOTcsMy4yOCwyLjQ4LDEuOTksMS41MWMuMjMsLjE4LC41MiwuMjcsLjgxLC4yN3MuNTgtLjEsLjgxLS4yN2wxLjk5LTEuNTEsMy4yOC0yLjQ4LDYuNjctNWguMDJjMS40LTEuMDcsMi40Mi0yLjU1LDIuOTEtNC4yNCwuNDktMS42OSwuNDEtMy40OS0uMjItNS4xM1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQwLjI4LDIxLjJsLS4wNC0uMTFjLTIuMTIsLjQ0LTQuMTIsMS4zNC01Ljg2LDIuNjNsLTkuNTUsNy4yNGMzLjI2LDIuNDYsNi4wOSw0LjYsNi4wOSw0LjZsNi42Ny01aC4wMmMxLjQtMS4wNywyLjQyLTIuNTYsMi45LTQuMjQsLjQ4LTEuNjksLjQtMy40OC0uMjMtNS4xMloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4LjczLDM1LjU2bDMuMjgsMi40OCwxLjk5LDEuNTFjLjIzLC4xOCwuNTIsLjI3LC44MSwuMjdzLjU4LS4xLC44MS0uMjdsMS45OS0xLjUxLDMuMjgtMi40OHMtMi44My0yLjE0LTYuMDktNC42bC02LjA4LDQuNloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1LjI1LDIzLjczYy0xLjczLTEuMy0zLjczLTIuMi01Ljg2LTIuNjNsLS4wNCwuMTFjLS42MywxLjY0LS43LDMuNDMtLjIyLDUuMTIsLjQ4LDEuNjksMS41LDMuMTcsMi45LDQuMjNoLjAycy4wNCwuMDQsLjA0LC4wNGw2LjY0LDQuOTcsNi4xMS00LjYtOS41Ny03LjIzWiIvPgogIDwvZz4KPC9zdmc+"
                  width="40"
                  height="40"
                  draggable="false"
                  alt="View profile on GitLab.com"
                />
              </OverlayTrigger>
            ) : (
              <img
                src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OS42NCA0OC44NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZhYTMyNzsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZjM2ZTJiOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNlMjQ0Mjk7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogIzI3Mjk2MTsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGVsbGlwc2UgY2xhc3M9ImNscy00IiBjeD0iMjQuODIiIGN5PSIyNC40MiIgcng9IjI0LjgyIiByeT0iMjQuNDIiLz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQwLjI4LDIxLjJsLS4wNC0uMTEtNC4zNS0xMS4zNWMtLjA5LS4yMi0uMjQtLjQxLS40NS0uNTQtLjItLjEzLS40NC0uMTktLjY4LS4xOC0uMjQsLjAxLS40NywuMS0uNjYsLjI1LS4xOSwuMTUtLjMyLC4zNi0uMzksLjU5bC0yLjk0LDloLTExLjlsLTIuOTQtOWMtLjA2LS4yMy0uMi0uNDQtLjM5LS41OS0uMTktLjE1LS40Mi0uMjQtLjY2LS4yNS0uMjQtLjAxLS40OCwuMDUtLjY4LC4xOC0uMiwuMTMtLjM2LC4zMi0uNDUsLjU0bC00LjM2LDExLjM3LS4wNCwuMTFjLS42MywxLjY0LS43LDMuNDMtLjIyLDUuMTIsLjQ4LDEuNjgsMS41LDMuMTcsMi45LDQuMjJoLjAycy4wNCwuMDQsLjA0LC4wNGw2LjY0LDQuOTcsMy4yOCwyLjQ4LDEuOTksMS41MWMuMjMsLjE4LC41MiwuMjcsLjgxLC4yN3MuNTgtLjEsLjgxLS4yN2wxLjk5LTEuNTEsMy4yOC0yLjQ4LDYuNjctNWguMDJjMS40LTEuMDcsMi40Mi0yLjU1LDIuOTEtNC4yNCwuNDktMS42OSwuNDEtMy40OS0uMjItNS4xM1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQwLjI4LDIxLjJsLS4wNC0uMTFjLTIuMTIsLjQ0LTQuMTIsMS4zNC01Ljg2LDIuNjNsLTkuNTUsNy4yNGMzLjI2LDIuNDYsNi4wOSw0LjYsNi4wOSw0LjZsNi42Ny01aC4wMmMxLjQtMS4wNywyLjQyLTIuNTYsMi45LTQuMjQsLjQ4LTEuNjksLjQtMy40OC0uMjMtNS4xMloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE4LjczLDM1LjU2bDMuMjgsMi40OCwxLjk5LDEuNTFjLjIzLC4xOCwuNTIsLjI3LC44MSwuMjdzLjU4LS4xLC44MS0uMjdsMS45OS0xLjUxLDMuMjgtMi40OHMtMi44My0yLjE0LTYuMDktNC42bC02LjA4LDQuNloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1LjI1LDIzLjczYy0xLjczLTEuMy0zLjczLTIuMi01Ljg2LTIuNjNsLS4wNCwuMTFjLS42MywxLjY0LS43LDMuNDMtLjIyLDUuMTIsLjQ4LDEuNjksMS41LDMuMTcsMi45LDQuMjNoLjAycy4wNCwuMDQsLjA0LC4wNGw2LjY0LDQuOTcsNi4xMS00LjYtOS41Ny03LjIzWiIvPgogIDwvZz4KPC9zdmc+"
                width="40"
                height="40"
                draggable="false"
                alt="View profile on GitLab.com"
                title="View profile on GitLab.com"
              />
            )}
          </a>
          <p
            css={css`
              &&& {
                padding-top: 65px;
              }
            `}
          >
            <a
              href="https://github.com/seyoon20087/AnonymousRedirect"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              role="button"
              css={css`
                &&& {
                  margin-bottom: 24px;
                }
              `}
            >
              {"AnonymousRedirect"}
            </a>
            <br />
            <span>
              {"Very simple HTML page that is used for anonymous redirect"}
            </span>
          </p>
          <p
            css={css`
              &&& {
                padding-top: 35px;
              }
            `}
          >
            <a
              href="https://github.com/seyoon20087/macos-downloader"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              role="button"
              css={css`
                &&& {
                  margin-bottom: 24px;
                }
              `}
            >
              {"macos-downloader"}
            </a>
            <br />
            <span>
              {
                "Command line tool for downloading macOS installers and beta updates"
              }
            </span>
          </p>
        </div>
        <br />
        <footer className="container">
          {`Copyright © ${new Date().getFullYear()} github/seyoon20087. All rights reserved.`}
          <br />
          {"Use of this site subject to the "}
          <a
            href="https://docs.github.com/github/site-policy/github-terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"GitHub Terms of Service"}
          </a>
          {" and "}
          <a
            href="https://docs.github.com/github/site-policy/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Privacy Policy"}
          </a>
          {"."}
        </footer>
        <br />
        <br />
        <br />
      </CommonPage>
    </React.Fragment>
  );
}

export default Home;
