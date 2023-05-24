import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { projectReducer } from "./ducks";

export const store = configureStore({
  reducer: {
    project: projectReducer,
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
