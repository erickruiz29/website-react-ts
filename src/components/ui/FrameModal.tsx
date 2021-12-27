import { MouseEventHandler } from 'react';
import { IFrameProps } from './Frame';
import styles from './FrameModal.module.scss';

export interface IFrameModalProps extends IFrameProps {
  docHeight: number;
  overlayClick?: MouseEventHandler<HTMLDivElement>
}

export function FrameModal(props: IFrameModalProps) {
  const width = props.docHeight / 1.348
  return (
    <div className={styles.frameModalContainer}>
      <div className={styles.modalOverlay} onClick={props.overlayClick}/>
      <div
        className={styles.frameModal}
        style={{
          height: `${props.docHeight / 16}rem`,
          width: `${width / 16}rem`,
          left: `calc(50% - ${(width / 2) / 16}rem`
        }}
      >
        <div className={styles.photoContainer}
          style={{
            height: `calc(${width}px - 2rem)`,
            width: `calc(${width}px - 2rem)`
          }}
        >
          <img src={props.imgSrc} alt={props.description} />
        </div>
        <div className={styles.footer}>{props.description}</div>
      </div>
    </div>
  );
}
