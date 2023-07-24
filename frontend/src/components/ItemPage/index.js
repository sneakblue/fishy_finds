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
        console.log('Added Quantity: ' + itemCount);
        if (itemCount > 0) {
            dispatch(addCartItem(sessionUser, id, itemCount));
            setShowModal(true);
        }
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

    const quantityHandler = (direction) => {
        if (direction === '-' && itemCount >= 2) {
            setItemCount(Number(itemCount) - 1)
        } else if (direction === '+' && itemCount < 999) {
            setItemCount(Number(itemCount) + 1)
        }
    }

    const customQuantityHandler = (quantityInput) => {
        console.log(quantityInput)
        console.log(quantityInput.length);
        if (quantityInput.length > 3) {
            quantityInput = quantityInput.slice(0, 3);
        }
        if (quantityInput < 0) {
            setItemCount(0);
        } else {
            setItemCount(quantityInput);
        }
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
                    <div className='itemPage-price-quantity-container--div'>
                        <h3 className='itemPage-title-price--h3'>{`$${item?.price}`}</h3>
                        <div className='itemPage-quantity--div'>
                            <button
                                onClick={() => quantityHandler('-')}
                            >
                                -
                            </button>
                            <input
                                type='number'
                                value={itemCount}
                                onChange={(e) => customQuantityHandler(e.target.value)}
                                className='itemPage-quantity--input'
                                maxLength={3}
                                max={999}
                            />
                            <button
                                onClick={() => quantityHandler('+')}
                            >
                                +
                            </button>
                        </div>
                    </div>
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
