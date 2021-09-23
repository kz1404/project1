
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); 

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
      }))
      );
    });
  }

  function addTodo(e) {
    console.log('you are trying to add a todo');
    e.preventDefault();
    db.collection("todos").add({ 
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  } 
  return (
    <div 
      className="App" 
      style={{ 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>

        <h1>  Project 1 - interactive list ✔</h1> 
        <form>
          <TextField 
           id="standard-basic" 
            label="Add task" 
            onChange={(e) => {
             setTodoInput(e.target.value);
             console.log('this is the input $(e.target.value)');
           }}
           style={{
             maxWidth: "300px", 
             width: "90vw",
           }}
          />
          <Button variant="contained" color="primary" href="#contained-buttons"
            onClick={addTodo}
            type="submit"
            styles={{ display: "none" }}
          >
            Submit 
          </Button>
        </form>


        {todos.map((todo) => (
          <p>{todo.todo}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
