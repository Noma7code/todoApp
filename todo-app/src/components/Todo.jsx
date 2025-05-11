import { use, useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  //the use states are shared by Form and TodoList so it has to be in the parent component and passed as props to the shared child component
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;


  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer todos={todos} totalTodos={totalTodos} completedTodos={completedTodos} />
    </div>
  );
}
