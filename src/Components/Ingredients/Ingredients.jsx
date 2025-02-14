import axios from "axios"
import {  useEffect, useState } from "react";
import './ingredients.scss'
export default function Ingredients() {
    const [allIngred, setAllIngred] = useState([]);
        const[isLoad, setlsLoad]= useState(false)

    const getIngredients = async () => {
        setlsLoad(true)
        try {
            
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            const ingredients = res.data.meals
            const ingredName =ingredients.map((ing)=>(ing.strIngredient))
            // console.log(ingredients);
            setAllIngred(ingredName)
        } catch (err) {
            console.log(err +'ngredents errrrri');
            
        } finally {
            setlsLoad(false)
        }
    }
    useEffect(() => {
        getIngredients();
    },[])
    return <>
        <h1 className="text-center capitalize p-7">our ingredients</h1>
        
        {isLoad ? <h1>loading....</h1> : <>
        <div className="container overflow-hidden">

            <ul className="grid-cols-2 md:ml-64 grid md:grid-cols-4 mt-6 gap-2">

                {allIngred?.map((ing,index) => (
                    <li key={index} className="  ml-6 ingredients-list  ">

                            
                        {ing}
                    </li>
                ))}
        </ul>
        </div>
        </>}
    </>
}
