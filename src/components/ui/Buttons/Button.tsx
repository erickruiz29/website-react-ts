import { IDivProps } from "../../../utils";

import styles from './Button.module.scss';

export interface IButtonProps extends IDivProps {

}

export const Button = (props: IButtonProps) => {
    return <div {...props} className={[styles.button, props.className].join(" ")}/>
}