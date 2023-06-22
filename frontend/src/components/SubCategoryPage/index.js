import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStoreItems } from "../../store/storeItems";
import { getSubCategory } from "../../store/subCategories";

export default function SubCategoryPage () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const items = useSelector((state) => Object.values(state.storeItems));
    const subCategory = useSelector((state) => state[id]);

    useEffect(() => {
        dispatch(getSubCategory(id));
        dispatch(getStoreItems(id));
    }, [id, dispatch])

    console.log(subCategory);

    return (
        <div className="subCategory-main-container--div">
            <h2>SubCategory Page</h2>
        </div>
    )
}
