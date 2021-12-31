import { MouseEventHandler } from 'react';
import { IPropsWithChildren, randInt } from '../../utils';
import styles from './Frame.module.scss';
import modalStyles from './FrameModal.module.scss';

export interface IFrameProps extends IPropsWithChildren {
  description?: string;
  imgSrc: string;
  randRotation?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isBlockFrame?: boolean;
  isModal?: boolean;
  date?: string
  title?: string
  styles?: React.CSSProperties
}

export function Frame(props: IFrameProps) {
  const negPos = Math.random() < 0.5 ? -1 : 1;
  const randNum = randInt(0, 6) * negPos;
  const useStyles = props.isModal === true ? modalStyles : styles;
  return (
    <div
      className={props.isBlockFrame ? useStyles.blockFrame : useStyles.frame}
      style={{
        ...props.styles,
        transform: props.randRotation ? `rotate(${randNum}deg)` : '',
      }}
      onClick={props.onClick}
    >
      <div
        className={
          props.isBlockFrame
            ? useStyles.blockFrame__photoContainer
            : useStyles.frame__photoContainer
        }
      >
        <img src={props.imgSrc} alt={props.description ?? 'image'} />
      </div>
      <div className={useStyles.footer}>
        <div className={useStyles.footer__top}>
          <div className={useStyles.footer__title}>{props.title ?? ''}</div>
          <div className={useStyles.footer__date}>{props.date ?? ''}</div>
        </div>
        <div className={useStyles.footer__description}>
          {props.description ?? ''}
        </div>
      </div>
    </div>
  );
}
