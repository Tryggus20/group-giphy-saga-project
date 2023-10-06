import React, {useState} from "react";
import { useDispatch } from "react-redux";

export default function FavoriteListItem({ favorite }) {
  const dispatch = useDispatch();
  console.log(favorite, "this better work");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleButtonClick = (category_id) => {
    dispatch({
      type: 'SET_CATEGORY',
      payload: { id: favorite.id, category_id },
    });
    setSelectedCategory(category_id);
  };

  return (
    <>
      {favorite.url !== undefined && (
        <li>
          <img
            src={favorite.url}
            style={{ width: "270px", height: "270px" }}
            alt="favorite"
          ></img>
          <br />
          <button
            onClick={() => handleButtonClick(1)}
            disabled={selectedCategory === 1}
          >
            Funny
          </button>{" "}
          <button
            onClick={() => handleButtonClick(2)}
            disabled={selectedCategory === 2}
          >
            Cohort
          </button>{" "}
          <button
            onClick={() => handleButtonClick(3)}
            disabled={selectedCategory === 3}
          >
            Cartoon
          </button>{" "}
          <button
            onClick={() => handleButtonClick(4)}
            disabled={selectedCategory === 4}
          >
            NSFW
          </button>{" "}
          <button
            onClick={() => handleButtonClick(5)}
            disabled={selectedCategory === 5}
          >
            Meme
          </button>
        </li>
      )}
    </>
  );
}