import React from 'react';
import ListItem from "../ListItem/ListItem";
import { IListItem } from "../../models";

//style
import './list.scss';

function List({list, onDelete, onEdit}:
                {list: IListItem[], onEdit: Function, onDelete: Function}): JSX.Element {
  return (
    <div className="list">
      {
        list.map((item: IListItem)=>
          <ListItem key={item.index} text={item.text} index={item.index} onEdit={onEdit} onDelete={onDelete}/>)
      }
    </div>
  );
}

export default List;