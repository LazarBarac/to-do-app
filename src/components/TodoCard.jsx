import React from "react";

export default function TodoCard({ ...props }) {
  return (
    <div>
      <li className="todoItem">
        {props.children}
        <div className="actionsContainer">
          <i className="fa-regular fa-pen-to-square"></i>
          <i className="fa-regular fa-trash-can"></i>
        </div>
      </li>
    </div>
  );
}
