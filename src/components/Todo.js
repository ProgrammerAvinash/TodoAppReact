import React from "react";
import "./Todo.css";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: true,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo  aligned divided list">
      <input
        onClick={completeHandler}
        type="checkbox"
        id="1"
        name=""
        value=""
      />
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>

      <i onClick={deleteHandler} className="x icon deleteIcon"></i>
    </div>
  );
};

export default Todo;
