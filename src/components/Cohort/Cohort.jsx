import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

export default function Cohort() {

    // initalize dispatch
    const dispatch = useDispatch();

    // initalize store
    const store = useSelector(store => store.categoryReducer)

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORY', payload: 2})
    },[])


    return (
        <>
        <h1> Cohort Category</h1>
        {store.map(gif => (
            <div key={gif.id}>
                <img src={gif.url} />
            </div>
        ))}
        </>
    )
}