import React from 'react';
import List from "./components/List/List";
import SearchBox from "./components/SearchBox/SearchBox";
import InputBox from "./components/InputBox/InputBox";
import { IListItem, InputMode } from "./models";

import './app.scss';

function App() {
  const [filter, setFilter] = React.useState('');
  const [editValue, setEditValue] = React.useState('');
  const [todoList, setTodoList] = React.useState<IListItem[]>([]);

  const [editIndex, setEditIndex] = React.useState<number | null>(null);
  const [mode, setMode] = React.useState(InputMode.Add);

  React.useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setTodoList(JSON.parse(items));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todoList));
  }, [todoList]);

  const onAddClick = () => {
    if (editValue.length === 0) return;
    const newList = [...todoList];
      newList.push({
        text: editValue,
        index: todoList.length > 0 ? todoList[todoList.length-1].index + 1 : 1
      });

      setTodoList(newList);
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
    let newList = [...todoList];
    newList = newList.filter((item) => item.index !== index);
    setTodoList(newList);

  }

  const onEditSaveClick = () => {
    if (!editIndex) return;
    const newTodoList = [...todoList];
    const item = newTodoList.find((item) => item.index === editIndex);

    if (item) {
      item.text = editValue;
      setTodoList(newTodoList);
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
