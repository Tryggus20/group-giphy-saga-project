import React from 'react';
import FavoriteList from '../FavoriteList/FavoriteList.jsx';
import Search from '../Search/Search.jsx';
import "./app.css";

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <h2>Hi!</h2>
      <Search />
      <FavoriteList />
      
    </div>
    
  );
}

export default App;

