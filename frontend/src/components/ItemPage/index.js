import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getStoreItem } from '../../store/storeItems';
import { addCartItem } from '../../store/cart';
import ItemDetails from './ItemDetails';
import CartModal from '../CartModal';
import './ItemPage.css';

export default function ItemPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ showDetails, setShowDetails ] = useState(false);
    const [ showModal, setShowModal ] = useState(false);
    const [ itemCount, setItemCount ] = useState(1);
    const item = useSelector((state) => state.storeItems[id]);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getStoreItem(id));
    }, [dispatch, id]);


    const addCartHandler = () => {
        dispatch(addCartItem(sessionUser, id, itemCount));
        setShowModal(true);
    }

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
                    <h3 className='itemPage-title-price--h3'>{item?.name}</h3>
                    <h3 className='itemPage-title-price--h3'>{`$${item?.price}`}</h3>
                    <button
                        className='itemPage-addToCart--button'
                        onClick={addCartHandler}
                    >ADD TO CART</button>
                </div>
            </div>
            <div className='itemPage-product-chart--div'>
                <h3>PRODUCT CHART</h3>
                {item && (
                    <ItemDetails details={item.details}/>
                )}
            </div>
            <CartModal
                showModal={showModal}
                setShowModal={setShowModal}
                itemCount={itemCount}
                item={item}
            />
        </div>
    )
}
