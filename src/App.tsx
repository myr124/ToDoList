import { useState, useRef } from "react";
import { TodoListComponent, TodoItem } from "./components/ToDo";
import MatButton from "./components/MatButton";
import { TextField } from "@mui/material";

const App = () => {
  const [text, setText] = useState("");
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

 
  // const item: TodoItem = { name: "Eric", desc: "hello world" };
  // const name = "";
  // const desc = ""
  // const item2: TodoItem = {name, desc};
  // setTodoItems([...todoItems,item]);
  return (
    <div className="justify-center flex flex-col">
      
      <div className="flex justify-center align-middle">
        <MatButton onClick={()=>{
          const name: string | undefined= text;
          if (name) {
            const todo: TodoItem = {name};
            // setTodoItems((prev)=>[todo,...prev]);
            setTodoItems([todo,...todoItems]);
            // setTodoItems([todo,...todoItems]);
          }
        }}></MatButton>
      </div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e)=>setText(e.target.value)}ref={inputRef}></TextField>
      <TodoListComponent list={todoItems}/>
      {/*ask fofr name and desc and call setTodoItems and add rhe new itm to the end*/}
    </div>
  );
};

export default App;
