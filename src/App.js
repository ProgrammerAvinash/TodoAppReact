import { React, useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  // useEffect(()=>{
  //   getLocalTodos();
  // },[]);

  useEffect(() => {
    filterHandler();
    //  saveLocalTodos()
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "inCompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //localStoragefunction [saving to local Storage]
  // const saveLocalTodos = () => {

  //     localStorage.setItem('todos',JSON.stringify(todos))

  // }
  // const getLocalTodos = () => {
  //   if(localStorage.getItem('todos')===null){
  //     localStorage.setItem('todos' , JSON.stringify([]));
  //   }else{
  //     let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //     setTodos(todoLocal);
  //   }

  // };

  return (
    <div className="container">
      <div className="App">
        <InputBox
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
        />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
