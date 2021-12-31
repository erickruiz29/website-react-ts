import { MouseEventHandler } from 'react';
import { Frame, IFrameProps } from './Frame';
import styles from './FrameModal.module.scss';

export interface IFrameModalProps extends IFrameProps {
  overlayClick?: MouseEventHandler<HTMLDivElement>;
}

export function FrameModal(props: IFrameModalProps) {
  return (
    <div className={styles.frameModalContainer}>
      <div className={styles.modalOverlay} onClick={props.overlayClick} />
      <Frame
        {...{
          ...props,
          isModal: true
        }}
      />
    </div>
  );
}
