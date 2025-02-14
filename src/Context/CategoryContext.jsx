import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  { createContext, useEffect, useState } from 'react'


export const CategoryContext = createContext();



export default function CategoryContextProvider({ children }) {
    
    const [selectedMealId, setSelectedMealId] = useState(); 
    const [recipe, setRecipeDetails] = useState(null);
    const [getlMeals, setGetMeals] = useState();
    const [catName, setCatName] = useState();
    const [filteredMeals, setFilteredMeals] = useState([]);
    const[isLoad, setlsLoad]= useState(false)





    // getCategory 
    const getCategory = async () => {
        setlsLoad(true);
        try {
            
            return await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            // console.log(res);
        } catch (err) {
            console.log(`${err} from getCategory`);
            
        } finally {
            setlsLoad(false)
        }
        
    }

    const { data } = useQuery({
        queryKey: ['getCategory'],
        queryFn: getCategory
    });
    const categoryName = data?.data.categories;
    // categoryName.strCategory
    console.log(categoryName);
    




    // getAllMeals
    const getAllMeals = async () => {
        setlsLoad(true)
        try {
            
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            const meals = res?.data.meals
            console.log(meals);
            setGetMeals(meals)

            const mealsId = meals?.map(meal => meal.idMeal);
            const category= meals?.map(meal=>meal.strCategory)
            console.log(category);
            setCatName(category)
            setSelectedMealId(mealsId)
            setFilteredMeals(meals);
            
            
            
        } catch (err) {
            console.log(`${err} from getAllMeals`);
            
        } finally {
            setlsLoad(false)
        }
    }





    // get recipe
      const getRecipe = async (mealsId) => {
        if (!mealsId) return; 
        setlsLoad(true)
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealsId}`);
            console.log(res.data);
            setRecipeDetails(res.data.meals[0]); 
                    localStorage.setItem('recipe', JSON.stringify(res.data.meals[0])); // Store in localStorage

        } catch (err) {
            console.log(`Error fetching recipe: ${err}`);
        } finally {
            setlsLoad(false)
        }
    };


    // fillter by category 
    const filterByCategory = async (category) => {
           if (!category) {
        setFilteredMeals(getlMeals || []); 
        return;
    }
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            console.log(res);
            setFilteredMeals(res.data.meals || []);
            
            setCatName(category);
            // 
        } catch (err) {
            console.log(err +'err from filterByCategory');
            
        }
        

    }


    useEffect(() => {
        getAllMeals();
        const storedRecipe = localStorage.getItem('recipe');
    if (storedRecipe) {
        setRecipeDetails(JSON.parse(storedRecipe));
    }
    },[])



    

    return <>
        <CategoryContext.Provider value={{isLoad,categoryName,recipe,getlMeals,getRecipe,filterByCategory,filteredMeals}}>
            {children}
        </CategoryContext.Provider>
    </>
}
