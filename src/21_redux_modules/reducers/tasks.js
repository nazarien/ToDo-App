import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../../constant';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list'});

if (!TASKS  || !TASKS.tasks ) {
  TASKS = {
    tasks: []
  }
}

const tasks = (state = TASKS.tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isComplited: action.isComplited
        }
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== action.id);
    case COMPLETE_TASK:
      return [...state].map(task => {
        if(task.id === action.id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
      default:
        return state;
  }
};

export default tasks;


// const tasks = (state = [], {id, text, isComplited, type}) => {
//   switch (type) {
//     case ADD_TASK:
//       return [
//         ...state,
//         {
//           id,
//           text,
//           isComplited
//         }
//       ];
//       default:
//         return state;
//   }
// };
