import { useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { getStoreItemsList } from '../../store/storeItems';


export default function CartList({cartItemCount, cartItemDetails}) {

    // console.log(cartItemDetails.length);
    return (
        <div className="cartList-main-container--div">
            {cartItemDetails.map((item, idx) => {
                return (
                    <div className="cartList-item-container--div">
                        <div className="carList-item-img-title--div">
                            <img
                                className='cartPage-item--img'
                                src={item?.imageUrl}
                                alt='product'
                            />
                            <h5>{item.name}</h5>
                            <h3>Quantity: {cartItemCount[idx].quantity}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
