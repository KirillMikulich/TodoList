import React from 'react';

//style
import './list.scss';
import ListItem from "../ListItem/ListItem";

function List(): JSX.Element {
  const array = [
    {name: 'dasdas', tags: ['sdad', 'sdasd', 'asdasda']},
    {name: 'dasd123as', tags: ['sd1ad', 'sda41sd', 'as2dasda']},
    {name: 'das4214das', tags: ['sd2ad', 'sd414asd', 'asd553asda']},
    {name: 'das4214das', tags: ['sd2ad', 'sd414asd', 'asd553asda']},
  ];

  return (
    <div className="list">
      {
        array.map((item)=>
          <ListItem name={item.name}
                    tags={item.tags}/>)
      }
    </div>
  );
}

export default List;