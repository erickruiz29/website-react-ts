import { MouseEventHandler } from 'react';
import { IPropsWithChildren } from '../../utils/util';
import styles from './Frame.module.scss';

export interface IFrameProps extends IPropsWithChildren {
  description?: string;
  imgSrc: string;
  randRotation?: boolean;
  multiplier?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isBlockFrame?: boolean;
  startRow?: number;
  startCol?: number;
  colLen?: number;
  rowLen?: number;
}

export function Frame(props: IFrameProps) {
  const negPos = Math.random() < 0.5 ? -1 : 1;
  const randNum = (Math.floor(Math.random() * 100) * negPos) % 6;
  const gridRow =
    props.rowLen && props.startRow
      ? `${props.startRow} / ${props.startRow + props.rowLen}`
      : '';

  const gridCol =
    props.colLen && props.startCol
      ? `${props.startCol} / ${props.startCol + props.colLen}`
      : '';
  return (
    <div
      className={props.isBlockFrame ? styles.blockFrame : styles.frame}
      style={{
        transform: props.randRotation ? `rotate(${randNum}deg)` : '',
        gridRow: gridRow,
        gridColumn: gridCol,
      }}
      onClick={props.onClick}
    >
      <div
        className={
          props.isBlockFrame
            ? styles.blockFrame__photoContainer
            : styles.frame__photoContainer
        }
      >
        <img src={props.imgSrc} alt={props.description ?? 'image'} />
      </div>
      <div className={styles.footer}>{props.description ?? ''}</div>
    </div>
  );
}
