import React, { Component } from "react";
import store from "./store/index";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList
} from "./store/actionCreator";
import TodoListUI from "./store/TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  //用charles mock的本地JSON数据
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // axios.get("/list.json").then(res => {
    //   const data = res.data;
    //   const action = initTodoItemAction(data);
    //   store.dispatch(action);
    // });
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
