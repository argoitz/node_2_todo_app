import "./TasksBox.scss";
import TodoCard from "./TodoCard";

const TasksBox = ({ status, todos, setNewTodo }) => {
  let filteredTodos = todos.filter((todo) => todo.status === status);
  return (
    <div className={`tasks_box ${status.replace(" ", "_")}`}>
      <h2>{status}</h2>
      <TodoCard todos={filteredTodos} setNewTodo={setNewTodo} />
    </div>
  );
};

export default TasksBox;
