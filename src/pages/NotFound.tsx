// import React, { useEffect } from "react";
import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

function NotFound() {
    <Helmet>
        <html lang="en" dir="ltr" />
        <title>seyoon20087.github.io</title>
        <meta name="description" content="seyoon20087.github.io" />
    </Helmet>
    return (
        <>
        <Navigate to="/" />
        </>
    );
}

export default NotFound;