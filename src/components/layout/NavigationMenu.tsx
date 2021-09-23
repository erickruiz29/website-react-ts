import React from "react";
import {NavLink} from "react-router-dom";

import "./NavigationMenu.scss"

export function NavigationMenu() {
    return (
        <div className={"navigationMenu"}>
            <ul>
                <li>
                    <NavLink to={"/"} exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/page-2"}>Page 2</NavLink>
                </li>
            </ul>
        </div>
    )
}
