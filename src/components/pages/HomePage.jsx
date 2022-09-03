import React, { Component } from "react";
import SideBar from "../sidebar/Sidebar";
import Products from "../Products/Products";
import CartItems from "../cart/CartItems";
import "./css/HomePage.css"

function HomePage() {
    return (
        <>
            <SideBar/>
            <Products/>
            <CartItems/>
        </>
        
    );
}
export default HomePage;
