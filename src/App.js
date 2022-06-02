import {React,useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  
  
  return (
    <div className="container">

    <div className="App">
   
      <InputBox inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      
      <TodoList inputText={inputText}/>
        
      <Footer/>
    
    </div>
    
    </div>
  );
}

export default App;
