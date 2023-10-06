import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Category.css";

export default function Category() {
  const params = useParams();

  // initalize dispatch

  // initalize store
  const store = useSelector((store) => store.favoriteReducer);
  const filterFavorites = store.filter(
    (favorite) => String(favorite.category_id) === String(params.category_id)
  );

  console.log(store, "in funnymode");
  return (
    <>
    <h1>{params.category_id} Category</h1>
      <div className="category-body">
        
        {/* <h2>{JSON.stringify(params)}</h2> */}
        <div className="category-container">
          {filterFavorites.map((gif) => (
            <div className="gif-item" key={gif.id}>
              <img src={gif.url} alt="GIF" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
