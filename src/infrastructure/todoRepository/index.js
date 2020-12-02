const url = "http://127.0.0.1:3005/todos";

const getTodos = async () => {
  try {
    const response = await fetch(url, { method: "GET" });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const createTodo = async (data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

const editTodo = async (data) => {
  try {
    const response = await fetch(url + `/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export default {
  getTodos,
  createTodo,
  editTodo,
};
