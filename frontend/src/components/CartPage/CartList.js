import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getStoreItemsList } from '../../store/storeItems';


export default function CartList({currItems}) {
    const dispatch = useDispatch();
    const itemDetails = useSelector((state) => Object.values(state.storeItems));

    useEffect(() => {
        const ids = [];
        currItems.forEach(item => ids.push(item.item_id));
        dispatch(getStoreItemsList(ids));
    }, [])

    console.log(itemDetails);

    return (
        <div>
            Items List:
            {currItems.map(item => <>{item.item_id}</>)}
        </div>
    )
}
