import { IDivProps } from '../../utils';
import styles from './ContentGrid.module.scss';

export interface ContentProps extends IDivProps {
  preserveNewlines?: boolean;
}

export function ContentGrid(props: ContentProps) {
  return (
    <div
      className={[
        styles.contentGrid,
        props.className,
        props.preserveNewlines === true ? styles.newlines : '',
      ].join(' ')}
    >
      {props.children}
    </div>
  );
}
