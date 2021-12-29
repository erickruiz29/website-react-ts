import { MouseEventHandler } from 'react';
import { IPropsWithChildren } from '../../utils/util';
import styles from './Frame.module.scss';

export interface IFrameProps extends IPropsWithChildren {
  description: string;
  imgSrc: string;
  randRotation?: boolean;
  multiplier?: number;
  onClick?: MouseEventHandler<HTMLDivElement>
}

export function Frame(props: IFrameProps) {
  const negPos = Math.random() < 0.5 ? -1 : 1;
  const randNum =
    (Math.floor(Math.random() * 100) * negPos) % 6;
  return (
    <div
      className={styles.frame}
      style={{ transform: props.randRotation ? `rotate(${randNum}deg)` : '' }}
      onClick={props.onClick}
    >
      <div className={styles.photoContainer}>
        <img src={props.imgSrc} alt={props.description} />
      </div>
      <div className={styles.footer}>{props.description}</div>
    </div>
  );
}
