import React, { useState } from "react";

export default function TodoInput({ ...props }) {
  return (
    <header>
      <input
        value={props.todoValue}
        onChange={(e) => {
          props.setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="Enter your task.."
      />
      <button
        onClick={() => {
          props.handleAddTodos(props.todoValue);
          props.setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
