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
      <div>
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
          <Link to="/funny">Funny Gifs</Link>
          <br />
          <Link to="/cohort">Cohort Gifs</Link>
          <br />
          <Link to="/cartoon">Cartoon Gifs</Link>
          <br />
          <Link to="/nsfw">NSFW Gifs</Link>
          <br />
          <Link to="/meme">Meme Gifs</Link>
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
        <Route exact path="/funny">
          <Funny />
        </Route>
        <Route path="/cohort">
          <Cohort />
        </Route>
        <Route path="/cartoon">
          <Cartoon />
        </Route>
        <Route path="/nsfw">
          <Nsfw />
        </Route>
        <Route path="/meme">
          <Meme />
        </Route>
      </div>
    </Router>
  );
}
export default App;
