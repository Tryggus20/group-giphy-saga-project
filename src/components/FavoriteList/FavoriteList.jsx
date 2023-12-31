import FavoriteListItem from "../FavoriteListItem/FavoriteListItem";
import { useSelector, useDispatch } from "react-redux/";
import { useEffect } from "react";
import './FavoriteList.css'

export default function FavoriteList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "FETCH_FAVORITE"})
, []  })
  const fList = useSelector((store) => store.favoriteReducer);
  console.log(fList);
  return (
    <div className="FavoriteListContainer">
      {/* <h2>Here are the favorite gifs:</h2> */}
      {fList.map((favorite) => (
        <FavoriteListItem key={favorite.id} favorite={favorite}/>
      ))}
    </div>
  );
}
