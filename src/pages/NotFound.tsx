// import React, { useEffect } from "react";
import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

function NotFound() {
    const [isBrowserLoaded, setIsBrowserLoaded] = React.useState(false);
    React.useEffect(() => {
      setIsBrowserLoaded(true);
    })
    return (
        <>
        <Helmet>
        <html lang="en" dir="ltr" />
        <title>{"seyoon20087.github.io"}</title>
        <meta name="description" content="seyoon20087.github.io" />
    </Helmet>
        {isBrowserLoaded ? <Navigate to="/" /> : <noscript>
            <meta httpEquiv="refresh" content="0; url=/" />
        </noscript>}
        </>
    );
}

export default NotFound;