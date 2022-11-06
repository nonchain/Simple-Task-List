import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../features/taskSlice';
import buttonSlice from '../features/buttonSlice';

export const store = configureStore({
   reducer: {
      tasks: taskSlice,
      buttons: buttonSlice,
   }
})