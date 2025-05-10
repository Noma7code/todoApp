import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  //the use states are shared by Form and TodoList so it has to be in the parent component and passed as props to the shared child component
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
