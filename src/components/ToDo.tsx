// import { useState } from "react";

// const [ToDoitems, SetTodoItems] = useState([]);

export type TodoItem = { name: string; desc: string };

interface ITodoProps {
  item: TodoItem;
}

interface ITodoListProps {
  list: TodoItem[];
}

export const TodoListComponent = ({ list }: ITodoListProps) => {
  return list.map((e) => <TodoComponent item={e} />);
};

export const TodoComponent = ({ item }: ITodoProps) => {
  return (
    <div>
      <strong>{item.name}</strong>
      {item.desc}
    </div>
  );
};
