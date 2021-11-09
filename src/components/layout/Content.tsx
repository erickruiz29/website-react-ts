import {PropsWithChildren} from "react";
export interface ContentProps {
    className?: string
}

export function Content(props: PropsWithChildren<ContentProps>) {
    return (
        <div className={`content ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}
