import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getStoreItemsList } from '../../store/storeItems';


export default function CartList({currItems}) {
    const dispatch = useDispatch();
    const itemDetails = useSelector((state) => Object.values(state.storeItems));
    const ids = [];
    currItems.forEach(item => ids.push(item.item_id));

    useEffect(() => {
        dispatch(getStoreItemsList(ids));
    }, [dispatch])

    console.log(itemDetails);

    return (
        <div>
            Items List:
            {itemDetails?.map(item => {
                return (
                    <div>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}
