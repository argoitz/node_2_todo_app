import todoRepository from "../../../infrastructure/todoRepository";
import "./TodoCard.scss";

const TodoCard = ({ todos, setNewTodo }) => {
  const clickHandle = (id) => {
    let selectedTodo = todos.filter((t) => t.id === id);
    selectedTodo = selectedTodo[0];
    selectedTodo.completed
      ? (selectedTodo.status = "to do")
      : (selectedTodo.status = "finished");

    selectedTodo.completed = !selectedTodo.completed;
    console.log(selectedTodo);
    todoRepository.editTodo(selectedTodo);
    setNewTodo(selectedTodo);
  };

  const changeStatus = (val, id) => {
    let selectedTodo = todos.filter((t) => t.id === id);
    selectedTodo = selectedTodo[0];
    selectedTodo.status = val;
    todoRepository.editTodo(selectedTodo);
    setNewTodo(selectedTodo);
  };

  let renderTodos = todos.map((todo) => {
    return (
      <div className="todoCard">
        <ul>
          <li className="name">{todo.name}</li>
          <li className="owner">{todo.owner}</li>
          <li className="description">{todo.description}</li>

          <li className="card-footer">
            <div className="select">
              <select
                value={todo.status}
                onChange={(e) => changeStatus(e.target.value, todo.id)}
              >
                <option value="to do">to do</option>
                <option value="doing">doing</option>
                <option value="finished">finished</option>
              </select>
            </div>

            <div className="completed">
              <input
                type="checkbox"
                checked={todo.completed ? "checked" : ""}
                onChange={() => clickHandle(todo.id)}
              />
              Done
            </div>
          </li>
        </ul>
      </div>
    );
  });
  return <>{renderTodos}</>;
};

export default TodoCard;
