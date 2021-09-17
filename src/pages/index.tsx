import React from "react";
// import Head from '@docusaurus/Head';
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../css/darkmode.css";
import "../css/custom.css";

export default function () {
    return (
      <>
      {/*
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'none';style-src 'self' 'unsafe-inline';script-src 'self' 'unsafe-inline';img-src 'self'; frame-src 'none'; media-src 'none'; object-src 'none'; manifest-src 'none'; connect-src 'self'; prefetch-src 'self'"></meta>
      </Head>
      */}
      <Layout title="">
        <div className="container">
  <br />
  <br />
  <br />
  <h1>seyoon20087</h1>
  <hr />
  <p>
    Below you'll find the projects that I am currently owning on GitHub.
    <br />
    More information can be found at{" "}
    <Link href="//github.com/seyoon20087/" target="_blank" rel="noopener">
      my page
    </Link>
    .
  </p>
  <br />
  <br />
  <p>
    <Link
      href="//github.com/seyoon20087/AnonymousRedirect/"
      target="_blank" rel="noopener"
      className="btn btn-primary"
      role="button"
    >
      AnonymousRedirect
    </Link>
    <br />
    <br />
    Very simple HTML page that is used for anonymous redirect
  </p>
  <br />
  <br />
  <p>
    <Link
      href="//github.com/seyoon20087/OSRestoreX/"
      target="_blank" rel="noopener"
      className="btn btn-primary"
      role="button"
    >
      OSRestoreX
    </Link>
    <br />
    <br />A semi-restore Alternative for iOS 10.
  </p>
  <br />
  <br />
  <p>
    <Link
      href="//github.com/seyoon20087/macos-downloader/"
      target="_blank" rel="noopener"
      className="btn btn-primary"
      role="button"
    >
      macos-downloader
    </Link>
    <br />
    <br />
    Command line tool for downloading macOS installers and beta updates
  </p>
  <br />
  <br />
  <br />
    <footer>
      Copyright © {new Date().getFullYear()} github/seyoon20087. All rights reserved.
      <br />
      Use of this site subject to the{" "}
      <Link
        href="https://docs.github.com/github/site-policy/github-terms-of-service"
        target="_blank" rel="noopener"
      >
        GitHub Terms of Service
      </Link>{" "}
      and{" "}
      <Link
        href="https://docs.github.com/github/site-policy/github-privacy-statement"
        target="_blank" rel="noopener"
      >
        Privacy Policy
      </Link>
      .
    </footer>
  <br />
  <br />
  <br />
</div>
</Layout>
</>
    );
}