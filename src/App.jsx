
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import RouterLayout from './RouterLayout/RouterLayout'
import Home from './Components/Home/Home'
import CategoryContextProvider from './Context/CategoryContext'
import MealsDetails from './Components/MealsDetails/MealsDetails'
import Ingredients from './Components/Ingredients/Ingredients'
import Areas from './Components/Areas/Areas'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClint = new QueryClient();
const routes = createHashRouter([
  {
    path: '', element: <RouterLayout />, children: [
      { index: true, element: <Home /> },
      {path:'mealsDetails', element:<MealsDetails/>},
      {path:'Ingredients', element:<Ingredients/>},
      {path:'areas', element:<Areas/>}
  ]}
])
function App() {

  return (
    <>
      <QueryClientProvider client={queryClint}>
        <CategoryContextProvider>

          <RouterProvider router={routes}/>
        </CategoryContextProvider>

      </QueryClientProvider>
    </>
  )
}

export default App
