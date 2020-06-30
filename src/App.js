import React from 'react';

import MyList from './components/myList/myList';
import MyInfiniteList from './components/myInfiniteList/myInfiniteList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Luis Humberto Gonzalez Toscano</header>
      <MyList></MyList>
      ---------------------
      <MyInfiniteList></MyInfiniteList>
    </div>
  );
}

export default App;
