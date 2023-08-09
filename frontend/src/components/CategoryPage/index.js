import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../store/categories';
import { getSubCategories, getSubCategory } from '../../store/subCategories';
import './CategoryPage.css';

export default function CategoryPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const category = useSelector(state => state.categories[id]);
    const subCategories = useSelector(state => Object.values(state.subCategories));

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSubCategories());
    }, [])

    return (
        <div className='categoryPage-main-container--div'>
            <div className='navbar-spacer'/>
            <h2>{category?.title}</h2>
            <div className='categoryPage-subCategory-links-list--div'>
                {subCategories?.map(subCategory => {
                    if (subCategory.category_id === Number(id)) {
                        return (
                            <Link
                                to={`/subCat/${subCategory.id}`}
                                className='categoryPage-subCategory--link'
                            >
                                {subCategory.title}
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}
