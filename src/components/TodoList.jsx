import React from "react";
import TodoCard from "./TodoCard";
import { v4 as uuidv4 } from "uuid";

export default function TodoList({ ...props }) {
  return (
    <ul className="main">
      {props.todos.map((todo) => {
        return (
          <TodoCard todos={props.todos} key={uuidv4()}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
