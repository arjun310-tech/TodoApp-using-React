import React, { useState } from "react";
import { RiMailAddLine } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoApp = () => {
  let [text, setText] = useState("");
  let [input, setInput] = useState([]);
  let [edit, setEdit] = useState(null);

  const handleAdd = () => {
    if (text.trim() !== "") {
      if (edit) {
        setInput(
          input.map((item) => (item.id === edit ? { ...item, text } : item))
        );
        setEdit(null);
      } else {
        setInput([...input, { id: Date.now(), text }]);
      }
      setText("");
    }
  };

  const handleDelete = (id) => {
    let del = input.filter((list) => list.id !== id);
    setInput(del);
  };

  const handleEdit = (item) => {
    setText(item.text);
    setEdit(item.id);
  };

  return (
    <div className="todo-container">
      <h1> React - TodoApp </h1>

      <section className="todo-input">
        <input
          type="text"
          value={text}
          placeholder="Enter Task"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-btn" onClick={handleAdd}>
          {edit ? <RxUpdate /> : <RiMailAddLine />}
        </button>
      </section>

      <ul className="todo-list">
        {input.map((item) => (
          <li key={item.id} className="todo-item">
            <span>{item.text}</span>
            <div className="actions">
              <button className="edit-btn" onClick={() => handleEdit(item)}>
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                <MdDeleteForever />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
