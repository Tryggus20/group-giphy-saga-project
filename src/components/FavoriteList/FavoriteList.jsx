// import FavoriteListItem from "../FavoriteListItem/FavoriteListItem"
import { UseSelector } from "react-redux/";
export default function FavoriteList() {

const fList = useSelector((store) => store)
console.log(flist);
return (
    <div className="FavoriteListContainer" >
        <h2>Here are the favorite gifs:</h2>
    {flist.map((favorite) => (
        <FavoriteListItem  favorite={favorite}/>
    ))}
    </div>
)
}