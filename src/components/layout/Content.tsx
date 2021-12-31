import { IDivProps } from '../../utils';
import styles from './Content.module.scss';

export interface ContentProps extends IDivProps {
  preserveNewlines?: boolean;
}

export function Content(props: ContentProps) {
  return (
    <div
      className={[
        styles.content,
        props.className,
        props.preserveNewlines === true ? styles.newlines : '',
      ].join(' ')}
    >
      {props.children}
    </div>
  );
}
