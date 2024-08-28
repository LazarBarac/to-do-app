import React from "react";

export default function TodoCard({ ...props }) {
  return (
    <div>
      <li className="todoItem">
        {props.children}
        <div className="actionsContainer">
          <button
            onClick={() => {
              props.handleEditTodo(props.todoIndex);
            }}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              props.handleDeleteTodo(props.todoIndex);
            }}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
