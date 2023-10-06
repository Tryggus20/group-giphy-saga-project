import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./Search.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Search() {
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.searchReducer);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchResults);

  useEffect(() => dispatch({ type: "FETCH_GIFS" }), []);

  const sendSearch = () => {
    dispatch({ type: "FETCH_GIFS", payload: searchQuery });
    setSearchQuery("");
  };

  const addFavorite = (favorite) => {
    dispatch({ type: "ADD_FAVORITE", payload: { url: favorite } });
  };

  return (
    <>
      <div className="search-container">
        <h2>Search gifs here!</h2>
        {/* set search query via input field */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* send search dispatch onClick */}
        <button className="search-button" onClick={sendSearch}>
          Search
        </button>
      </div>
      {/* show search results */}
      <div className="gif-container">
        {searchResults.data?.length > 0 ? (
          searchResults.data.map((gif) => (
            <div key={gif.id} className="gif-item">
              <img
                src={gif.images.original.url}
                style={{ width: "270px", height: "270px" }}
              />
              <br />
              <FavoriteIcon
                className="favorite-icon"
                onClick={() => addFavorite(gif.images.original.url)}
              />

              <br />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
