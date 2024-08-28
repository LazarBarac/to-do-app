import React from "react";
import TodoCard from "./TodoCard";
import { v4 as uuidv4 } from "uuid";

export default function TodoList({ ...props }) {
  return (
    <ul className="main">
      {props.todos.map((todo, index) => {
        return (
          <TodoCard
            handleEditTodo={props.handleEditTodo}
            handleDeleteTodo={props.handleDeleteTodo}
            key={uuidv4()}
            todoIndex={index}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
