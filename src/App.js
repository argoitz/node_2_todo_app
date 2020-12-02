import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TasksBox from "./components/TasksBox";
import todoRepository from "./infrastructure/todoRepository";

function App() {
  const status = ["to do", "doing", "finished"];
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);
  const [inputValues, setInputValues] = useState({
    name: "",
    description: "",
    completed: false,
    completion_date: Date.now,
    status: "to do",
    owner: "",
  });

  useEffect(() => {
    todoRepository.getTodos().then((res) => {
      setTodos(res);
    });
  }, [newTodo]);

  return (
    <div className="container">
      <Form
        todos={todos}
        inputValues={inputValues}
        setInputValues={setInputValues}
        setNewTodo={setNewTodo}
      />
      {status.map((e) => {
        return <TasksBox status={e} todos={todos} setNewTodo={setNewTodo} />;
      })}
    </div>
  );
}

export default App;
