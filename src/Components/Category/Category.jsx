import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
// import AllMeals from "../AllMeals"; // Import your component
import AllMeals from "../AllMeals/AllMeals";

import './category.scss'
export default function Category() {
    const { categoryName, filterByCategory ,isLoad } = useContext(CategoryContext);


    return (
        <>
            {/* All Category Buttons */}


            {isLoad ? null: <>
                            <div className=" flex flex-wrap   ">
                <button
                    onClick={() => filterByCategory(null)}
                    type="button"
                    className="btn"
                >
                    All Categories
                </button>

                {/* Categories Buttons */}
                {categoryName?.map((cat) => (
                    <button
                        onClick={() => filterByCategory(cat.strCategory)}
                        key={cat.idCategory}
                        type="button"
                        className="btn-cat"
                    >
                        {cat.strCategory}
                    </button>
                ))}
            </div>
            </>}



        </>
    );
}
