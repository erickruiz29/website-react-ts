import { ILabelProps } from '../../../utils';
import { IExtendedInputProps, Input } from './Input';

import styles from './Input.module.scss';

export interface IInputFormGroupProps {
  labelProps: ILabelProps;
  inputProps: IExtendedInputProps;
  formGroupClassName?: string
}

export const InputFormGroup = (props: IInputFormGroupProps) => {
    console.log("TEST", styles)
    console.log("TEST", props.formGroupClassName)
  return (
    <div className={[styles.inputFormGroup, props.formGroupClassName !== undefined && styles[props.formGroupClassName]].join(" ")}>
      <label
        {...props.labelProps}
        className={[styles.label, props.labelProps.className].join(' ')}
      >
          {props.labelProps.innertext}
      </label>
      <Input {...props.inputProps} />
    </div>
  );
};
