import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  level: 1,
  levelCap: 99,
  retireLevel: null,
  class: null,
  subClass: null,
};

export const actionUpdateCharacterStats = createAction(
  "actionUpdateCharacterStats"
);

const characterReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionUpdateCharacterStats, (state, action) => {
    state = { ...state, ...action.payload };
  });
});

export default characterReducer;
