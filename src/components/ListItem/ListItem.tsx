import React from 'react';

//css
import './list-item.scss';

function ListItem({text, index, onEdit, onDelete}:
                    {text: string, onDelete: Function, onEdit: Function, index: number}): JSX.Element {
  return (
    <div className="list-item">
      <div className="content">
        <div className="text">
          {
            text.split(' ')
              .filter((item) => !item.startsWith('#')).join(' ')
          }</div>
        <div className="tag-container">
          {
            text.split(' ')
              .filter((item) => item.startsWith('#'))
              .map((item, index) => <span className="tag" key={item + index}>{item}</span>)
          }
        </div>
      </div>
      <div className="controls">
        <button onClick={() => onEdit(index)}>Edit</button>
        <button value="gray" onClick={() => onDelete(index)}>Delete</button>
      </div>
    </div>
  );
}

export default ListItem;