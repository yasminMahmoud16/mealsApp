import { useContext } from "react"
import { CategoryContext } from "../../Context/CategoryContext"
import {  useNavigate } from 'react-router-dom'
import './allMealls.scss'
import logo from '../../assets/logo-BfNap0Pe.png'

export default function AllMeals() {
    // const { id}=useParams()
    const { filteredMeals, getRecipe,isLoad } = useContext(CategoryContext)
    const navigate = useNavigate();
    return <>
        

        
        {isLoad ? <h1>loading.... </h1> : <>
                    {filteredMeals?.map((meal) => (
            
            <div key={meal.idMeal} className="card">

            <div className="flex flex-col gap-1.5 items-center ">
                <img className="cardImg " src={meal.strMealThumb || logo} alt="Bonnie image" />
                <h5 className="mb-1 text-sm font-medium text-gray-900 rec-title ">{meal.strMeal.slice(0,15)}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{ meal.strArea}</span>
                    <div className="flex mt-4 md:mt-6">
                            
                        <button onClick={() => {
                                    getRecipe(meal.idMeal); 
                                    navigate('/mealsDetails'); 
                                }}  className=" btn-recipe">  view recipe </button>
                </div>
            </div>
            </div>
        ))}
        </>}
        

        


    </>
}

