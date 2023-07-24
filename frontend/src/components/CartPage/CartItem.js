import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../../store/cart";
import { useState } from "react";

export default function CartItem ({item}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [ quantity, setQuantity ] = useState(item.quantity);

    const removeItemHandler = () => {
        dispatch(updateCartItem(sessionUser, item.id, 0));
    }

    const updateQuantityHandler = () => {
        dispatch(updateCartItem(sessionUser, item.id, quantity));
    }

    return (
        <div className="cartList-item-container--div">
            <div className="cartList-item-img-title--div">
                <div className='cartList-item-img-container--div'>
                    <img
                        className='cartPage-item--img'
                        src={item?.imageUrl}
                        alt='product'
                    />
                </div>
                <div className='cartList-item-title--div'>
                    <h5 className='cartList-item-name--header'>{item.name}</h5>
                    <button
                        className="cartList-item-remove--button"
                        onClick={() => removeItemHandler()}
                    >Remove</button>
                </div>
                <div className='cartList-item-quantity--div'>
                    <h5>Quantity: </h5>
                    <input
                        type='number'
                        className="cartList-item-quantity--input"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        onBlur={updateQuantityHandler}
                    />
                </div>
            </div>
            <div className="cartList-price--div">
                <h4>Price: ${item.price}</h4>
            </div>
            <div className="cartList-subTotal--div">
                <h4>SubTotal: ${(item.price * quantity).toFixed(2)}</h4>
            </div>
        </div>
    )
}
