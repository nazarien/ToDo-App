/* eslint-disable no-undef */
import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from "../../constant";

export const addTask = (id, text, isComplited) => ({
  type: ADD_TASK,
  id,
  text,
  isComplited
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter,
}) 