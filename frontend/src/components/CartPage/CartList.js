// import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { getStoreItemsList } from '../../store/storeItems';
import { updateCartItem } from '../../store/cart';


export default function CartList({cartItemCount, cartItemDetails}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // console.log(cartItemDetails.length);

    const removeItemHandler = (id) => {
        console.log(id)
        dispatch(updateCartItem(sessionUser, id, 0));
    }

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
                            <button onClick={() => removeItemHandler(item.id)}>Remove</button>
                            <h3>Quantity: {cartItemCount[idx].quantity}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
