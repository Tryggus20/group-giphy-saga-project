import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

export default function Cartoon() {

    // initalize dispatch
    const dispatch = useDispatch();

    // initalize store
    const store = useSelector(store => store.categoryReducer)

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORY', payload: 3})
    },[])

console.log(store, "in toonmode");
    return (
        <>
        <h1> Category: Cartoon</h1>
        {store.map(gif => (
            <div key={gif.id}>
                <img src={gif.url} />
            </div>
        ))}
        </>
    )
}