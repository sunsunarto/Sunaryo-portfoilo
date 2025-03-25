import React from "react";
import "../ComponentsStyle/Header.css"

function Header() {
    return(
        <div className="mainHeader">
            <div className="header">
                <h4>sunsun<span>arto</span> | web developer</h4>
                <div className="nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>       
        </div>
    )
}

export default Header
