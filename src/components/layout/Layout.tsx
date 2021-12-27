import {Fragment, PropsWithChildren, ReactElement} from "react";

import styles from './Layout.module.scss';

export interface LayoutProps {
    navMenu: ReactElement
    contentGridSizing?: boolean
    fixedHeader?: boolean
}

export function Layout(props: PropsWithChildren<LayoutProps>) {
    return (
        <Fragment>
            <header className={[styles.header, props.fixedHeader ? styles.fixedHeader : ""].join(" ")}>
                {props.navMenu}
            </header>
            <main className={[styles.main, props.contentGridSizing ? styles.contentGridSizing : ""].join(" ")}>
                {props.children}
            </main>
        </Fragment>
    )
}