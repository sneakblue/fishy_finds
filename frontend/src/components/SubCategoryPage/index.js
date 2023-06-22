import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStoreItems } from "../../store/storeItems";

export default function SubCategoryPage () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const items = useSelector((state) => Object.values(state.storeItems));

    useEffect(() => {
        dispatch(getStoreItems(id));
    }, [id, dispatch])
    console.log(items);
    return (
        <div className="subCategory-main-container--div">
            <h2>SubCategory Page</h2>
        </div>
    )
}
