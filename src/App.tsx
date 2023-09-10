import { useState, useRef } from "react";
import Button from "./components/Button";
import { TodoListComponent, TodoItem } from "./components/ToDo";

const App = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // const item: TodoItem = { name: "Eric", desc: "hello world" };
  // const name = "";
  // const desc = ""
  // const item2: TodoItem = {name, desc};
  // setTodoItems([...todoItems,item]);
  return (
    <div>
      <input ref={inputRef}></input>
      <Button onClick={()=>{
        const name: string | undefined= inputRef.current?.value;
        if (name) {
          const todo: TodoItem = {name};
          // setTodoItems((prev)=>[todo,...prev]);
          setTodoItems([todo,...todoItems]);
          // setTodoItems([todo,...todoItems]);
        }
      }}></Button>
      <TodoListComponent list={todoItems}/>
      {/*ask fofr name and desc and call setTodoItems and add rhe new itm to the end*/}
    </div>
  );
};

export default App;
