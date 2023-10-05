import React from "react";
import { useDispatch } from "react-redux";

export default function FavoriteListItem({ favorite }) {
const dispatch = useDispatch();
console.log(favorite, "this better work")

    return (
        <>
            {favorite.url !== undefined && (<li><img src={favorite.url} style={{ width: '270px', height: '270px' }}></img>
            <br />
                <button>Funny</button> <button>Cohort</button> <button>Cartoon</button> <button>NSFW</button> <button>Meme</button></li>
            )}
        </>

    )
}