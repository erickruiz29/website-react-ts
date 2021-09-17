import React from "react";
import {Link} from "react-router-dom";

import "./NavigationMenu.scss"

export function NavigationMenu() {
    return (
        <div className={"navigationMenu"}>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/second-page"}>Second Page</Link>
                </li>
            </ul>
        </div>
    )
}