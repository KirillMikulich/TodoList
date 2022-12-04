import React from 'react';

import './input-box.scss';
import { InputMode } from "../../models";

function InputBox({value, onChange, mode, onSave}:
                    {value: string, onChange: Function, mode: InputMode, onSave: Function}
): JSX.Element {

  const onKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      onSave();
    }
  }
  return (
    <div className="input-box-container">
      <div className="input-container">
        <input type="text"
               id="fname"
               name="fname"
               value={value}
               onKeyDown={onKeyDown}
               onChange={e => onChange(e.target.value)}
               aria-labelledby="label-fname"
        />
        <label className="label" htmlFor="fname" id="label-fname">
          <div className="text">Добавление заметки</div>
        </label>
      </div>

      <button onClick={() => onSave()} >
        {
          mode === InputMode.Add ? 'Добавить' : 'Изменить'
        } </button>
    </div>
  );
}

export default InputBox;