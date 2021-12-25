import { optionalAttr } from "../utils/util";
import {Card, CardProps} from "./ui/Card";

interface TextCardProps extends CardProps  {}

export function TextCard(props: TextCardProps) {
    return (
        <Card {...{...props, classes: [...optionalAttr(props.classes), "text-card"]}}>
            {props.children}
        </Card>
    )
}
