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
    <div>
      <strong>{item.name}</strong>
    </div>
  );
};
