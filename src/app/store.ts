import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  toolbarReducer from '../redux/ToolbarSlice';
import framesReducer from '../redux/FramesSlice';

export const store = configureStore({
  reducer: {
    toolbar: toolbarReducer,
    frames: framesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
