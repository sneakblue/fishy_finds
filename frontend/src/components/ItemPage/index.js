import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStoreItem } from '../../store/storeItems';

export default function ItemPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const item = useSelector((state) => state.storeItems[id]);

    useEffect(() => {
        dispatch(getStoreItem(id));
    }, [dispatch, id])

    console.log(item);
    return (
        <div>
            Item Page
        </div>
    )
}
