import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
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
            <div className="subCategory-items-main--div">
                <h2>{subCategory?.title}</h2>
                <div className="subCategory-items-count--div"><h5>{`Results: ${items?.length}`}</h5></div>
                <div className="subCategory-items-list--div">
                    {items && (
                        items.map(item => <div className="subCategory-item-card--div" key={item.id}>
                                <img src={item.imageUrl} className="subCategory-item-card--img"/>
                                <div className="subCategory-item-card-details--div">
                                    <div className="subCategory-item-card-name--div">
                                        <p>{item.name}</p>
                                    </div>
                                    <div>
                                        <p>{`$${item.price}`}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
