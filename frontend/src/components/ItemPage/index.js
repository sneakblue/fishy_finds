import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getStoreItem } from '../../store/storeItems';
import ItemDetails from './ItemDetails';
import './ItemPage.css';

export default function ItemPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ showDetails, setShowDetails ] = useState(false);
    const item = useSelector((state) => state.storeItems[id]);

    useEffect(() => {
        dispatch(getStoreItem(id));
    }, [dispatch, id])

    let productDetails;
    if (showDetails) {
        productDetails = (
            <>
                <p className='productDetails-detail-p'>{item?.description}</p>
                <div
                    onClick={() => setShowDetails(false)}
                    className='productDetails-toggle-detail'
                >Show less</div>
            </>
        )
    } else {
        productDetails = (
            <>
                <p className='productDetails-detail-p'>{`${item?.description.slice(0, 265)}..`}</p>
                <div
                    onClick={() => setShowDetails(true)}
                    className='productDetails-toggle-detail'
                >Show more</div>
            </>
        )
    }

    console.log(item);
    return (
        <div className='itemPage-main-container'>
            <div className='navbar-spacer'/>
            <div className='itemPage-upper-container'>
                <div className='itemPage-image-details-container'>
                    <div className='itemPage-image-div'>
                        <img
                            className='itemPage-image-img'
                            src={item?.imageUrl}
                            alt='product'
                        />
                    </div>
                    <h3>PRODUCT DETAILS</h3>
                    {productDetails}
                </div>
                <div className='itemPage-title-price-container'>
                    <h3>{item?.name}</h3>
                    <h3>{`$${item?.price}`}</h3>
                </div>
            </div>
            <div className='itemPage-product-chart--div'>
                <h3>PRODUCT CHART</h3>
                {item && (
                    <ItemDetails details={item.details}/>
                )}
            </div>
        </div>
    )
}
