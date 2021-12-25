import {Fragment, PropsWithChildren} from "react";
import {NavigationMenu} from "./NavigationMenu";

import styles from './Layout.module.scss';

export interface LayoutProps {}

export function Layout(props: PropsWithChildren<LayoutProps>) {
    return (
        <Fragment>
            <header className={styles.header}>
                <NavigationMenu />
            </header>
            <main className={styles.main}>
                {props.children}
            </main>
        </Fragment>
    )
}