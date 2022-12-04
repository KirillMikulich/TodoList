import React from 'react';

import './search-box.scss';

function SearchBox({value, onChange}: {value: string, onChange: Function}): JSX.Element {
  return (
    <div className="search-box-container">
      <div className="input-container">
        <input type="text"
               id="fname"
               name="fname"
               value={value}
               onChange={e => onChange(e.target.value)}
               aria-labelledby="label-fname"
        />
        <label className="label" htmlFor="fname" id="label-fname">
          <div className="text">Поиск по тегу</div>
        </label>
      </div>
    </div>
  )
}

export default SearchBox;