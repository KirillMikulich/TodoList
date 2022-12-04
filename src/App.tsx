import React from 'react';
import List from "./components/List/List";

import './app.scss';

function App() {

  const [input, setInput] = React.useState('');

  return (
    <div className="container">
      <List/>
    </div>
  );
}

export default App;
