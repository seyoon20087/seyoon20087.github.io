import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function NotFound() {
    useEffect(() => {
        document.title = "seyoon20087.github.io";  
      }, []);
    return (
        <>
        <Redirect to="/" />
        </>
    );
}