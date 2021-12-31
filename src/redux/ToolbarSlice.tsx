import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface ToolbarState {
  isFrameToolOpen: boolean;
}

const initialState: ToolbarState = {
  isFrameToolOpen: false,
};


export const toolbarSlice = createSlice({
    name: 'toolbar',
    initialState,
    reducers: {
      openCloseFrameTool: (state: ToolbarState, action: PayloadAction<boolean>) => {
        state.isFrameToolOpen = action.payload;
      },
    },
  });

  export const selectIsFrameToolOpen = (state: RootState) => state.toolbar.isFrameToolOpen

  export const { openCloseFrameTool} = toolbarSlice.actions;

  export default toolbarSlice.reducer;