import React from "react";
import "./InputBox.css";
const InputBox = ({ inputText, setInputText, setStatus, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };

  return (
    <form className="">
      <header className="header"> Toto List </header>
      <div className="ui action input inputBox">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Enter Your Todo"
        />
        <button onClick={submitTodoHandler} className="btn ui button">
          Add
        </button>
      </div>
      <footer className="footer">
        <p>
          Show :{" "}
          <button className="footerBtn" value={"All"} onClick={statusHandler}>
            All
          </button>{" "}
          <button
            className="footerBtn"
            value={"inCompleted"}
            onClick={statusHandler}
          >
            Active
          </button>
          <button
            value={"completed"}
            className="footerBtn"
            onClick={statusHandler}
          >
            Completed
          </button>{" "}
        </p>
      </footer>
    </form>
  );
};
export default InputBox;
