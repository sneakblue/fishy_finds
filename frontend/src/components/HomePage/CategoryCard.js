import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function CategoryCard({ categoryId }) {

    const category = useSelector((state) => state.categories[categoryId]);
    const subCategories = useSelector((state) => Object.values(state.subCategories))
    const [showCategories, setShowCategories] = useState(false);

    let currCategories = [];
    if (subCategories) {
        for (let i = 0; i < subCategories.length; i++) {
            if (subCategories[i].category_id === categoryId) {
                currCategories.push(subCategories[i]);
            }
        }
    }

    let content;
    if (showCategories) {
        content = (
            <>
                <Link to={`/category/${category.id}`}>
                    <h5 className="categoryCard_title">{category.title.toUpperCase()}</h5>
                </Link>
                {currCategories.map((cat) => (
                    <Link to={`/subCat/${cat.id}`} className="subCat_title_link" key={cat.title}>
                        <p>{cat.title}</p>
                    </Link>
                ))}
            </>
        )
    } else {
        content = (
            <>
                <h5 className="categoryCard_title">{category.title.toUpperCase()}</h5>
            </>
        )
    }

    return (
        <div className="categoryCard_main_div" key={categoryId}>
            <img
                className="categoryCard_background--img"
                src={category.imageUrl}
                alt="categoryCard-background"
            />
            <div
                className="categoryCard_titles_background_div"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
            >
                {/* <h5 className="categoryCard_title">{category.title.toUpperCase()}</h5> */}
                {content}
            </div>
        </div>
    )
}
