import React from "react";
import { useDispatch } from "react-redux";

export default function FavoriteListItem({ favorite }) {
const dispatch = useDispatch();


    return (
        <>
            {favorite.data !== undefined && (<li><img src={favorite.data.images.original.url}></img>
                <button>Funny</button> <button>Cohort</button> <button>Cartoon</button> <button>NSFW</button> <button>Meme</button></li>
            )}
        </>

    )
}