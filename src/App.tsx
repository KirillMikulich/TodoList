import React from 'react';
import List from "./components/List/List";
import SearchBox from "./components/SearchBox/SearchBox";
import InputBox from "./components/InputBox/InputBox";
import { IListItem, InputMode } from "./models";

import './app.scss';

import TodoList  from './static/todoList.json';
let todoList: IListItem[] = TodoList.todoList;

function App() {
  const [filter, setFilter] = React.useState('');
  const [editValue, setEditValue] = React.useState('');

  const [editIndex, setEditIndex] = React.useState<number | null>(null);
  const [mode, setMode] = React.useState(InputMode.Add);

  console.log(TodoList);

  const onAddClick = () => {
    if (editValue.length === 0) return;
      todoList.push({
        text: editValue,
        index: todoList.length > 0 ? todoList[todoList.length-1].index + 1 : 1
      })

      setEditValue('');
      setFilter('');
      setMode(InputMode.Add);
  }

  const onEditClick = (index: number) => {

    setMode(InputMode.Edit);
    setFilter('');

    const editItem = todoList.find((item) => item.index === index);

    if (editItem) {
      setEditIndex(index);
      setEditValue(editItem.text);
    }
  }

  const onDeleteClick = (index: number) => {
    todoList = todoList.filter((item) => item.index !== index);
  }

  const onEditSaveClick = () => {
    if (!editIndex) return;
    const item = todoList.find((item) => item.index === editIndex);

    if (item) {
      item.text = editValue;
    }

    setEditValue('');
    setMode(InputMode.Add);
    setFilter('');

  }

  return (
    <div className="container">
      <SearchBox value={filter} onChange={setFilter}/>
      <List list={filter.length === 0 ? todoList : todoList.filter(item => item.text.includes(`#${filter}`))}
            onEdit={onEditClick}
            onDelete={onDeleteClick}/>
      <InputBox mode={mode}
                value={editValue}
                onChange={setEditValue}
                onSave={mode === InputMode.Add ? onAddClick : onEditSaveClick }/>
    </div>
  );
}

export default App;
