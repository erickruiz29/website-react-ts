import {Fragment, PropsWithChildren} from "react";
import {NavigationMenu} from "./NavigationMenu";

import "./Layout.scss";

export interface LayoutProps {}

export function Layout(props: PropsWithChildren<LayoutProps>) {
    return (
        <Fragment>
            <header>
                <NavigationMenu />
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}