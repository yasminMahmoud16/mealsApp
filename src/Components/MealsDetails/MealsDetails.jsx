import { useContext, useEffect } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { useParams } from "react-router-dom";
import './mealsDetails.scss'
export default function MealsDetails() {
    const { recipe, getRecipe,isLoad } = useContext(CategoryContext);
    const { id } = useParams(); 

useEffect(() => {
    if (!recipe) { t
        getRecipe(id);
    }
}, [id, getRecipe, recipe]);

    if (!recipe) {
        return <h1 className="text-center">Loading Recipe...</h1>;
    }

    return (
        <>
            
            {isLoad ? <h1>loading...</h1> : <>
                            <div className=" container ">
                <h1 className="text-center mb-5 pb-4">{recipe.strMeal} ingredients <i className="fa-solid fa-clipboard-list"></i></h1>
                

                <div className="grid grid-cols-6 ml-70">

                    <div className="img-div col-span-3 ">

                        <img src={recipe.strMealThumb} alt="" className="w-full" />
                    </div>
                    <div className="flex items-center gap-16 col-span-3">

                        <ul className="img-list">
                                <li>
                                <i className="fa-solid fa-utensils"></i>
                                    {recipe.strIngredient1}
                                </li>
                                <li>
                                    <i className="fa-solid fa-utensils"></i>
                                    {recipe.strIngredient2}
                                </li>
                                <li>
                                <i className="fa-solid fa-utensils"></i>
                                    {recipe.strIngredient3}
                            </li>
                            </ul>
                            


                        <ul className="img-list">

                                <li>
                                <i className="fa-solid fa-utensils"></i>
                                    {recipe.strIngredient4}
                                </li>
                                <li>
                                <i className="fa-solid fa-utensils"></i>
                                    {recipe.strIngredient5}
                                </li>
                                <li>
                                <i className="fa-solid fa-utensils"></i>
                                    {recipe.strIngredient6}
                                </li>
                                <li>
                                <i className="fa-solid fa-utensils"></i>
                                    {recipe.strIngredient7}
                                </li>
                        </ul>

                    </div>
                </div>
            </div>
            </>}

        </>
    );
}
