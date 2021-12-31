import { useAppDispatch } from '../../../app/hooks';
import { openCloseFrameTool } from '../../../redux/ToolbarSlice';
import { IProps } from '../../../utils';

import styles from './Toolbar.module.scss';

interface IToolbarProps extends IProps {}

export const Toolbar = (props: IToolbarProps) => {
    const dispatch = useAppDispatch()
  return (
    <div className={styles.toolbar}>
      <div
        className={styles.toolbar__createFrameTool}
        onClick={() => {
          console.log('Clicked create a frame!');
          dispatch(openCloseFrameTool(true));
        }}
      >
        Create a new Picture Frame
      </div>
    </div>
  );
};
