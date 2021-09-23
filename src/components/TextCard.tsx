import {Card, CardProps} from "./ui/Card";
import {PropsWithChildren} from "react";

import "./TextCard.scss"

interface TextCard extends CardProps {}

export function TextCard(props: PropsWithChildren<CardProps>) {
    return (
        <Card {...{...props, className: props.className ?? "" + " textCard"}}>
            {props.children}
        </Card>
    )
}
