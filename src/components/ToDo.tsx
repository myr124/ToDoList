// import { useState } from "react";
// const [ToDoitems, SetTodoItems] = useState([]);

import { Dispatch, Fragment, SetStateAction } from "react";

export type TodoItem = { id: number, name: string, checked: boolean };

interface ITodoProps {
  item: TodoItem;
}

interface ITodoListProps {
  list: TodoItem[];
  setList: Dispatch<SetStateAction<TodoItem[]>>
}



export const TodoListComponent = ({ list, setList }: ITodoListProps) => {

  return list.map((item, i) => <Fragment key={i}>
    <div className="border-solid border-2 border-black p-2">
      <input type="checkbox" onClick={() => {
        setList((prevList) => prevList.map(mapItem => mapItem.id == item.id ? { ...mapItem, checked: !mapItem.checked } : mapItem));
      }} />
      {item.checked ? <label className="line-through ">{item.name}</label> : <label className="">{item.name}</label>}
    </div>
  </Fragment>);
};
