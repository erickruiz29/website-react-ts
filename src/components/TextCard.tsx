import { optionalAttr } from "../utils/util";
import {Card, CardProps} from "./ui/Card";

import styles from "./TextCard.module.scss";

interface TextCardProps extends CardProps  {}

export function TextCard(props: TextCardProps) {
    return (
        <Card {...{...props, classes: [...optionalAttr(props.classes), styles.textCard]}}>
            {props.children}
        </Card>
    )
}
