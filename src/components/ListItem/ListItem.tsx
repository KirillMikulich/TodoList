import React from 'react';

//css
import './list-item.scss';

function ListItem({name, tags}: {name: string, tags: string[]}): JSX.Element {
  return (
    <div className="list-item">
      <div className="content">
        <div className="name">{name}</div>
        <div className="text">{'тестовый текст к заметке rjnjhфыв фыв фыв фы вфыв фыв фыв фыв фы вфы вфы вфы вфы вфыsq ds[jlbn pf uhfybws ntn grgwyeyubt natye yewfrtfqey uoyqftu fqutef qyeyq geyqfy gqeyuqoeyu wfteftq eg yuqfte qty'}</div>
      </div>
      <div className="controls">
        <button value="gray">Edit</button>
        <button value="gray">Delete</button>
      </div>
    </div>
  );
}

export default ListItem;