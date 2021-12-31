import { IPropsWithChildren } from '../../utils';
import styles from './Content.module.scss';

export interface ContentProps extends IPropsWithChildren {
  preserveNewlines?: boolean;
}

export function Content(props: ContentProps) {
  return (
    <div
      className={[
        styles.content,
        props.classes,
        props.preserveNewlines === true ? styles.newlines : '',
      ].join(' ')}
    >
      {props.children}
    </div>
  );
}
