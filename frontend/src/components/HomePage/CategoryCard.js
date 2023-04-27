import { useSelector } from "react-redux";


export default function CategoryCard({ categoryId }) {

    const category = useSelector((state) => state.categories[categoryId]);

    return (
        <div className="categoryCard_main_div">
            <div className="categoryCard_titles_background_div">
                <h5 className="categoryCard_title">{category.title.toUpperCase()}</h5>

            </div>
        </div>
    )
}
