import { useState } from "react";
import Button from "./components/Button";
import { TodoListComponent, TodoItem } from "./components/ToDo";

const App = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const item: TodoItem = { name: "Eric", desc: "hello world" };
  return (
    <div>
      <input></input>
      {/*ask fofr name and desc and call setTodoItems and add rhe new itm to the end*/}
    </div>
  );
};

export default App;
