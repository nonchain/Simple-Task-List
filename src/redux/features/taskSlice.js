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
   name: 'tasks',
   initialState,
   reducers: {
      showTaskListHandler(state, actions) {
         state.showTaskList = !actions.payload;
      },
      taskAdd: {
         reducer(state, action) {
            state.selectedTasks.push(action.payload);
         },
         prepare({id, title, created, uniqueId}) {
            return {
               payload: {
                  id,
                  title,
                  created,
                  uniqueId,
               }
            }
         }
      },
   }
})

export const selectAllTasks = state => state.tasks.allTasks;
export const selectAllCategories = state => state.tasks.allCategories;
export const selectSelectionTasks = state => state.tasks.selectedTasks;
export const selectSelectionCategories = state => state.tasks.selectedCategories;
export const isShowTaskList = state => state.tasks.showTaskList;
export const { showTaskListHandler, taskAdd } = taskSlice.actions;
export default taskSlice.reducer;