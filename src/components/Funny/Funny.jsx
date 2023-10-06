import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

export default function Cohort() {

    // initalize dispatch
    const dispatch = useDispatch();

    // initalize store
    const store = useSelector(store => store.categoryReducer)

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORY', payload: 1})
    },[])

console.log(store, "in funnymode");
    return (
        <>
        <h1> Category: Funny</h1>
        {store.map(gif => (
            <div key={gif.id}>
                <img src={gif.url} />
            </div>
        ))}
        </>
    )
}