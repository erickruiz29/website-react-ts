import { useAppDispatch } from '../../../app/hooks';
import { createFrame } from '../../../redux/FramesSlice';
import { openCloseFrameTool } from '../../../redux/ToolbarSlice';
import { IProps } from '../../../utils';
import { IFrameProps } from '../Frame';

import styles from './Toolbar.module.scss';

interface IFrameToolProps extends IProps {}

export const FrameTool = (props: IFrameToolProps) => {
  const frame: IFrameProps = {
    imgSrc: '',
    title: '',
    date: '',
    description: '',
  };

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
              frame.imgSrc = e.currentTarget.value;
            }}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type={'text'}
            placeholder="The day we went to..."
            onChange={(e) => {
              frame.title = e.currentTarget.value;
            }}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type={'text'}
            placeholder="12/25/2021"
            onChange={(e) => {
              frame.date = e.currentTarget.value;
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type={'text'}
            placeholder="This one time at band camp"
            onChange={(e) => {
              frame.description = e.currentTarget.value;
            }}
          />
        </div>
        <div
          onClick={() => {
            dispatch(createFrame(frame));
          }}
        >
          Create Frame!!
        </div>
      </div>
    </div>
  );
};
