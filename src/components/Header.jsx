import React from "react";
import './styles/Header.scss';
import Button from "./Button";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">Parcels</div>
            <div className="menu">
                <a href="#">Product</a>
                <a href="#">Tracking</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
            </div>
            <div className="auth">
                <a href="#">Log in</a>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
}

export default Header;