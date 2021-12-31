import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { IBlockFrameProps } from '../components/ui/BlockFrame';

export interface FramesState {
  frames: IBlockFrameProps[]
}

const initialState: FramesState = {
  frames: [] as IBlockFrameProps[]
};


export const framesSlice = createSlice({
    name: 'frames',
    initialState,
    reducers: {
      createFrame: (state: FramesState, action: PayloadAction<IBlockFrameProps>) => {
        state.frames.push(action.payload);
      },
    },
  });

  export const selectFrames = (state: RootState) => state.frames.frames

  export const { createFrame } = framesSlice.actions;

  export default framesSlice.reducer;