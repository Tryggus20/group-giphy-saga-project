import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

export default function Meme() {

    // initalize dispatch
    const dispatch = useDispatch();

    // initalize store
    const store = useSelector(store => store.categoryReducer)

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORY', payload: 5})
    },[])

console.log(store, "in mememode");
    return (
        <>
        <h1> Category: Meme</h1>
        {store.map(gif => (
            <div key={gif.id}>
                <img src={gif.url} />
            </div>
        ))}
        </>
    )
}