// import { useState } from "react";

// const [ToDoitems, SetTodoItems] = useState([]);

export type TodoItem = { name: string};

interface ITodoProps {
  item: TodoItem;
}

interface ITodoListProps {
  list: TodoItem[];
}

export const TodoListComponent = ({ list }: ITodoListProps) => {
  return list.map((e,i) => <TodoComponent item={e} key={i}/>);
};

export const TodoComponent = ({ item }: ITodoProps) => {
  return (
    
    <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
    {item.name}
    </label>
    </div>
  
  );
};
