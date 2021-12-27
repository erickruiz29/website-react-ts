import { IPropsWithChildren } from '../../utils/util';
import styles from './ContentGrid.module.scss';

export interface ContentProps extends IPropsWithChildren {
  preserveNewlines?: boolean;
}

export function ContentGrid(props: ContentProps) {
  return (
    <div
      className={[
        styles.contentGrid,
        props.classes,
        props.preserveNewlines === true ? styles.newlines : '',
      ].join(' ')}
    >
      {props.children}
    </div>
  );
}
