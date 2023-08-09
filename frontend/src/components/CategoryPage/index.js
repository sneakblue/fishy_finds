import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../store/categories';
import { getSubCategories } from '../../store/subCategories';
import './CategoryPage.css';

export default function CategoryPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const category = useSelector(state => state.categories[id]);
    const subCategories = useSelector(state => Object.values(state.subCategories));

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSubCategories());
    }, [dispatch])

    return (
        <div className='categoryPage-main-container--div'>
            <div className='navbar-spacer'/>
            <div className='categoryPage-banner-container--div'>
                <img
                    alt='categoryPage-banner'
                    className='categoryPage-category-banner--img'
                    src={category?.imageUrl}
                />
                <h2 className='categoryPage-title--header'>{category?.title}</h2>
            </div>
            <div className='categoryPage-subCategory-links-list--div'>
                {subCategories?.map(subCategory => {
                    if (subCategory.category_id === Number(id)) {
                        return (
                            <Link
                                to={`/subCat/${subCategory.id}`}
                                className='categoryPage-subCategory--link'
                            >
                                <img
                                    src={subCategory.imageUrl}
                                    alt='categoryPage-subCategory'
                                    className='categoryPage-subCategory--img'
                                />
                                <p className='categoryPage-subCategory-title--p'>
                                    {subCategory.title.toUpperCase()}
                                </p>
                            </Link>
                        )
                    } else {
                        return <></>
                    }
                })}
            </div>
        </div>
    )
}
