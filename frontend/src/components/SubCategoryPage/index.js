import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStoreItems } from "../../store/storeItems";
import { getSubCategory } from "../../store/subCategories";
import './SubCategoryPage.css';

export default function SubCategoryPage () {
    const dispatch = useDispatch();
    const { id } = useParams();
    const items = useSelector((state) => Object.values(state.storeItems));
    const subCategory = useSelector((state) => state.subCategories[id]);

    useEffect(() => {
        dispatch(getSubCategory(id));
        dispatch(getStoreItems(id));
    }, [id, dispatch])

    return (
        <div className="subCategory-main-container--div">
            <div className="subCategory-search-sidebar--div">

            </div>
            <div>
                <h2>{subCategory.title}</h2>
            </div>
        </div>
    )
}
