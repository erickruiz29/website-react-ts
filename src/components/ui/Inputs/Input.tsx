import { IInputProps } from '../../../utils';
import styles from './Input.module.scss';

export interface IExtendedInputProps extends IInputProps {
}

export const Input = (props: IExtendedInputProps) => {
    return (
        <input className={[props.className, styles.input].join(" ")} {...props} />
    )
}