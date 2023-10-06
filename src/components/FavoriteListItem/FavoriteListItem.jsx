import React from "react";
import { useDispatch } from "react-redux";
import './FavoriteListItem.css'

export default function FavoriteListItem({ favorite }) {
const dispatch = useDispatch();
console.log(favorite, "this better work")

    return (
        <>
        <div className="favorite-item">
            {favorite.url !== undefined && (<div><img src={favorite.url} style={{ width: '270px', height: '270px' }}></img>
            <br />
                <button>Funny</button> <button>Cohort</button> <button>Cartoon</button> <button>NSFW</button> <button>Meme</button></div>
            )}
        </div>
        </>

    )
}
