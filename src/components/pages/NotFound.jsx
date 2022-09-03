import React, { Component } from "react";
import SideBar from "../sidebar/Sidebar";
import "./css/notFound.css";

function NotFound() {
    return (
        <>
            <SideBar />
            <div className="notFound">
                <h2>Ooooops!!</h2>
                <h1>404</h1>
                <h2>Page Not Found</h2>
            </div>
        </>
    );
}

export default NotFound;
