import {PropsWithChildren} from "react";
export interface CardProps {
    className?: string
    onClick?: () => void
}

export function Card(props: PropsWithChildren<CardProps>) {
    const className = `card ${props.className ?? ""}`
    return (
        <div className={className} onClick={props.onClick}>{props.children}</div>
    )
}
