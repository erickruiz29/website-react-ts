import {PropsWithChildren} from "react";

export interface CardProps {
    className: string
}

export function Card(props: PropsWithChildren<CardProps>) {
    const className = `card ${props.className}}`
    return (
        <div className={className}>{props.children}</div>
    )
}