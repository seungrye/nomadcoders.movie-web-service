import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") return;

    setTodos(prev => [...prev, todo]);
    setTodo("");
  };

  return (
    <div>
      <h1>My Todo ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text"
          value={todo}
          onChange={onChange}
          placeholder="Write your todo..."
        />
        <button>add todo</button>
      </form>
    </div>
  );
}

export default App;
