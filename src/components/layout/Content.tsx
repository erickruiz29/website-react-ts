import { IPropsWithChildren } from '../../utils/util';
import styles from './Content.module.scss';

export interface ContentProps extends IPropsWithChildren {}

export function Content(props: ContentProps) {
  return (
    <div className={[styles.content, props.classes].join(' ')}>{props.children}</div>
  );
}
