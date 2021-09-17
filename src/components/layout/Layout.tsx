import {PropsWithChildren} from "react";
import {NavigationMenu} from "./NavigationMenu";

export interface LayoutProps {

}

export function Layout(props: PropsWithChildren<LayoutProps>) {
    return (
        <div>
            <NavigationMenu />
            <main>
                {props.children}
            </main>
        </div>
    )
}