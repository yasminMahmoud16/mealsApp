import AllMeals from "../AllMeals/AllMeals";
import Category from "../Category/Category";

export default function Home() {
  return <>
      
    
    <div className="container">
      <h1 className="text-center">Learn, Cook, Eat Your Food</h1>
      <div className="p-4 sm:ml-64">
          <div className="p-4 ">
            <div className="grid  gap-4 mb-4">
              
              <div className="  flex items-center justify-center rounded-sm ">
                          <Category/>

                
              </div>
            </div>
            <div className="min-h-screen flex flex-wrap gap-2 items-center justify-center  py-4 mb-4 rounded-sm ">
            <AllMeals />
            </div>



          </div>
        </div>

    </div>
    </>
}
