// import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';

function NotFound() {
    <Helmet>
        <html lang="en" />
        <title>seyoon20087.github.io</title>
    </Helmet>
    return (
        <>
        <Navigate to="/" />
        </>
    );
}

export default NotFound;