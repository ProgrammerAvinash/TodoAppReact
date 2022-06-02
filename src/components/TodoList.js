import React from "react";

const TodoList = ({inputText}) => {
  return <div className="Todo-container">

    <ul className="todo-list"> 
        <li>{inputText}</li>
    </ul>
    </div>;
};
export default TodoList;
