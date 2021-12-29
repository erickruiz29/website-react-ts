import { MouseEventHandler } from 'react';
import { IFrameProps } from './Frame';
import styles from './FrameModal.module.scss';

export interface IFrameModalProps extends IFrameProps {
  overlayClick?: MouseEventHandler<HTMLDivElement>;
}

export function FrameModal(props: IFrameModalProps) {
  return (
    <div className={styles.frameModalContainer}>
      <div className={styles.modalOverlay} onClick={props.overlayClick} />
      <div className={props.isBlockFrame ? styles.blockFrameModal : styles.frameModal}>
        <div className={
          props.isBlockFrame ?
          styles.blockFrameModal__photoContainer : 
          styles.frameModal__photoContainer
          }>
          <img src={props.imgSrc} alt={props.description} />
        </div>
        <div className={styles.footer}>{props.description}</div>
      </div>
    </div>
  );
}
