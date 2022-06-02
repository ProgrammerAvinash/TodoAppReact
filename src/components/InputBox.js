import React from "react";
import "./InputBox.css"
const InputBox=({inputText,setInputText , todos ,setTodos}) => {

const inputTextHandler = (e) => {
 
 setInputText(e.target.value);
}

const submitTodoHandler = () => {
 setTodos([...todos,
  
  {text:inputText ,
    completed:false,
    id:Math.random()*1000
  
  }])

  setInputText(""); 
}
  return (
    <div className="inputContainer">  
      <header className="header" > Toto List </header>    
        <div className="ui action input inputBox">
          <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Enter Your Todo"/>
          <button onClick={submitTodoHandler} className="btn ui button">Add</button>
        </div>
     
  </div>
  )
};
export default InputBox;
