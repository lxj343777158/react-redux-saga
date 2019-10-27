import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  Init_Todo_Item,
  GET_INIT_LIST
} from "./actionType";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initTodoItemAction = data => ({
  type: Init_Todo_Item,
  data
});

export const getInitList = () => ({
  type: GET_INIT_LIST
});
