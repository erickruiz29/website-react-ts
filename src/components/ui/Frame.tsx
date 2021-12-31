import { MouseEventHandler } from 'react';
import styles from './Frame.module.scss';
import modalStyles from './FrameModal.module.scss';

export interface IFrameProps {
  description?: string;
  imgSrc: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isBlockFrame?: boolean;
  isModal?: boolean;
  date?: string;
  title?: string;
  style?: React.CSSProperties
}

export function Frame(props: IFrameProps) {
  const useStyles = props.isModal === true ? modalStyles : styles;
  return (
    <div
      className={props.isBlockFrame ? useStyles.blockFrame : useStyles.frame}
      style={{
        ...props.style,
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
