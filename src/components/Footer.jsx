import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <>
  <br />
  <footer className="container">
    Copyright © 2021 github/seyoon20087. All rights reserved.
    <br />
    Use of this site subject to the{" "}
    <a
      href="https://docs.github.com/github/site-policy/github-terms-of-service"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub Terms of Service
    </a>{" "}
    and{" "}
    <a
      href="https://docs.github.com/github/site-policy/github-privacy-statement"
      target="_blank"
      rel="noopener noreferrer"
    >
      Privacy Policy
    </a>
    .
  </footer>
  <br />
  <br />
  <br />
</>

  );
}

export default Footer;