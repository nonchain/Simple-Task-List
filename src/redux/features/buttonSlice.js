import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   btnAddButton: false, // Add button is disable
   btnDeleteButton: false, // Delete button is disable
}

const buttonSlice = createSlice({
   name: 'buttons',
   initialState,
   reducers: {

   }
});

export default buttonSlice.reducer;