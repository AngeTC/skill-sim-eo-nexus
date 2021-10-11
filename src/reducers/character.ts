import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = {
  level: 1,
  levelCap: 99,
  retireLevel: null,
  class: null,
  subClass: null,
};

export const actionUpdateLevelCap = createAction<number>(
  "actionUpdateLevelCap"
);

const characterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionUpdateLevelCap, (state, action) => {
      state.levelCap = action.payload;
    });
});

// Selectors
export const levelCapSelector = (state: RootState): number => state.character.levelCap;

export default characterReducer;
