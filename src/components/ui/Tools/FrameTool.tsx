import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { createFrame } from '../../../redux/FramesSlice';
import { openCloseFrameTool } from '../../../redux/ToolbarSlice';
import { IProps } from '../../../utils';
import { IFrameProps } from '../Frame';

import styles from './Toolbar.module.scss';

interface IFrameToolProps extends IProps {}

export const FrameTool = (props: IFrameToolProps) => {
  const [frame, setFrame] = useState<IFrameProps>({
    imgSrc: '',
    title: '',
    date: '',
    description: '',
  } as IFrameProps);

  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        className={styles.toolOverlay}
        onClick={() => {
          dispatch(openCloseFrameTool(false));
        }}
      ></div>
      <div className={styles.frameTool}>
        <div>
          <label>Image source:</label>
          <input
            type={'text'}
            placeholder="https://imgur.com/...."
            onChange={(e) => {
              setFrame({...frame, imgSrc: e.currentTarget.value})
            }}
            value={frame.imgSrc}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type={'text'}
            placeholder="The day we went to..."
            onChange={(e) => {
              setFrame({...frame, title: e.currentTarget.value})
            }}
            value={frame.title}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type={'text'}
            placeholder="12/25/2021"
            onChange={(e) => {
              setFrame({...frame, date: e.currentTarget.value})
            }}
            value={frame.date}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type={'text'}
            placeholder="This one time at band camp"
            onChange={(e) => {
              setFrame({...frame, description: e.currentTarget.value})
            }}
            value={frame.description}
          />
        </div>
        <div
          onClick={() => {
            dispatch(createFrame(frame));
            setFrame({
              imgSrc: '',
              title: '',
              date: '',
              description: '',
            } as IFrameProps)
          }}
        >
          Create Frame!!
        </div>
      </div>
    </div>
  );
};
