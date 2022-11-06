import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   btnAddButton: false, // Add button is disable
   btnDeleteButton: false, // Delete button is disable
}

const buttonSlice = createSlice({
   name: 'buttons',
   initialState,
   reducers: {
      changeBtnAddState(state, action) {
         state.btnAddButton = action.payload;
      },
      changeBtnDeleteState(state, action) {
         state.btnDeleteButton = action.payload;
      }
   }
});

export const btnAddState = state => state.buttons.btnAddButton;
export const btnDeleteState = state => state.buttons.btnDeleteButton;
export const { changeBtnAddState, changeBtnDeleteState } = buttonSlice.actions;
export default buttonSlice.reducer;