// import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';

function NotFound() {
    /*
    useEffect(() => {
        document.title = "seyoon20087.github.io";  
      }, []);*/
    return (
        <>
        <Navigate to="/" />
        </>
    );
}

export default NotFound;