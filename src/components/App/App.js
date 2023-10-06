import React from "react";
import FavoriteList from "../FavoriteList/FavoriteList.jsx";
import Search from "../Search/Search.jsx";
import "./app.css";
import Nsfw from "../Nsfw/Nsfw.jsx";
import Meme from "../Meme/Meme.jsx";
import Cartoon from "../Cartoon/Cartoon.jsx";
import Cohort from "../Cohort/Cohort.jsx";
import Funny from "../Funny/Funny.jsx";
import Category from "../Category/Category.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, NavLink as Link } from "react-router-dom";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
// TODO to fetch all categories here
    console.log("useEffect in FavoriteList");
    // dispatch({ type: "FETCH_FAVORITE" });
  }, []);
  return (
    <Router>
      <div className='app-container'>
        <h1>Giphy Search!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" exact>
                Home
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/favorite">Favorite Gifs</Link>
            </li>
          </ul>
          <Link to="/category/1">Funny Gifs</Link>
          <br />
          <Link to="/category/2">Cohort Gifs</Link>
          <br />
          <Link to="/category/3">Cartoon Gifs</Link>
          <br />
          <Link to="/category/4">NSFW Gifs</Link>
          <br />
          <Link to="/category/5">Meme Gifs</Link>
        </nav>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/favorite">
          <FavoriteList />
        </Route>
        <Route path="/category/:category_id" exact>
          <Category />
        </Route>
        <Route exact path="/category/1">
          <Funny />
        </Route>
        <Route path="/category/2">
          <Cohort />
        </Route>
        <Route path="/category/3">
          <Cartoon />
        </Route>
        <Route path="/category/4">
          <Nsfw />
        </Route>
        <Route path="/category/5">
          <Meme />
        </Route>
      </div>
    </Router>
  );
}
export default App;
