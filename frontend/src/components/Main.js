import React from "react";
import { useEffect, useState } from "react";
import ToDo from "../components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../utils/HandleApi";
export default function Main() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(id);
  };
  return (
    <div>
      <div className="App">
        <div className="container">
          <h1>Task Management System</h1>

          <div className="top">
            <input
              type="text"
              placeholder="Add ToDos..."
              className="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div
              className="add"
              onClick={
                isUpdating
                  ? () =>
                      updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                  : () => addToDo(text, setText, setToDo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>

          <div className="list">
            {toDo.map((item, index) => (
              <ToDo
                key={item.id}
                text={item.text}
                index={index}
                updateMode={() => updateMode(item.id, item.text)}
                deleteToDo={() => deleteToDo(item.id, setToDo)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
