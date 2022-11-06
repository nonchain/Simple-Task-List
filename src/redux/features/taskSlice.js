import { createSlice } from '@reduxjs/toolkit';
import { tasks, categories } from '../../api/data';

const initialState = {
   allTasks: tasks,
   allCategories: categories,
   selectedTasks: [],
   selectedCategories: [],
   showTaskList: false,
}

const taskSlice = createSlice({
   name : 'tasks',
   initialState,
   reducers: {
      showTaskListHandler(state, actions) {
         console.log('clicked');
         state.showTaskList = !actions.payload;
      },
      taskAdd: {
         reducer(state, action) {

         },
         prepare(){
            return {
               payload: {
                  
               }
            }
         }
      }
   }
})

export const selectAllTasks = state => state.tasks.allTasks;
export const selectAllCategories = state => state.tasks.allCategories;
export const isShowTaskList = state => state.tasks.showTaskList;
export const { showTaskListHandler } = taskSlice.actions;
export default taskSlice.reducer;