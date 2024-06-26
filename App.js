import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div >
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
            </div>

            <div className="nav-items">
                <ul>
                    <li className="nav-list">Home</li>
                    <li className="nav-list">About  Us</li>
                    <li className="nav-list">Contact Us</li>
                    <li className="nav-list">Cart</li>
                </ul>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="">
            <Header />

        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);