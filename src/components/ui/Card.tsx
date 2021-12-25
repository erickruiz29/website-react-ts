import { IProps, IPropsWithChildren } from "../../utils/util";
export interface CardProps extends IPropsWithChildren {
    onClick?: () => void
}

export function Card(props: CardProps) {
    return (
        <div className={["card", props.classes].join(" ")} onClick={props.onClick}>{props.children}</div>
    )
}
