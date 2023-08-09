import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../store/categories';
import './CategoryPage.css';

export default function CategoryPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const category = useSelector(state => state.categories[id]);
    console.log(category);
    useEffect(() => {
        dispatch(getCategories());
    }, [])
    return (
        <div className='categoryPage-main-container--div'>
            <div className='navbar-spacer'/>
            <h2>{category?.title}</h2>
        </div>
    )
}
