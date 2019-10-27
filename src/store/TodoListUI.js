import React from "react";
import { Input, Button, List } from "antd";

const TodoListUI = props => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <Input
        placeholder="todo info"
        style={{ width: "300px", marginRight: "10px" }}
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>
        提交
      </Button>
      <List
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;