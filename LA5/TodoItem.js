import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Mark as completed</button>
    </li>
  );
};

export default TodoItem;
