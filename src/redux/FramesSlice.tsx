import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { IFrameProps } from '../components/ui/Frame';

export interface FramesState {
  frames: IFrameProps[]
}

const initialState: FramesState = {
  frames: []
};


export const framesSlice = createSlice({
    name: 'frames',
    initialState,
    reducers: {
      createFrame: (state: FramesState, action: PayloadAction<IFrameProps>) => {
        state.frames.push(action.payload);
      },
    },
  });

  export const selectFrames = (state: RootState) => state.frames.frames

  export const { createFrame } = framesSlice.actions;

  export default framesSlice.reducer;