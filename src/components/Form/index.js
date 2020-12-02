import { useState } from "react";
import todoRepository from "../../infrastructure/todoRepository";
import "./Form.scss";

const Form = ({ todos, inputValues, setInputValues, setNewTodo }) => {
  const clickHandle = () => {
    setNewTodo(inputValues);
    todoRepository.createTodo(inputValues);
    setInputValues({
      name: "",
      description: "",
      completed: false,
      completion_date: Date.now,
      status: "to do",
      owner: "",
    });
  };
  return (
    <div className="form">
      <h2>Create todo</h2>
      <div>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          value={inputValues.name}
          onChange={(e) =>
            setInputValues({ ...inputValues, name: e.target.value })
          }
        />
      </div>

      <div>
        <label>Owner: </label>
        <input
          type="text"
          placeholder="Owner"
          value={inputValues.owner}
          onChange={(e) =>
            setInputValues({ ...inputValues, owner: e.target.value })
          }
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          placeholder="Description"
          value={inputValues.description}
          onChange={(e) =>
            setInputValues({ ...inputValues, description: e.target.value })
          }
        ></textarea>
      </div>
      <a className="button" onClick={clickHandle}>
        Enviar
      </a>
    </div>
  );
};

export default Form;
