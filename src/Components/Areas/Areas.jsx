import axios from 'axios'
import  { useEffect, useState } from 'react'
import './area.scss'
export default function Areas() {
    const [allAreas, setAllAreas] = useState([]);
    const[isLoad, setlsLoad]= useState(false)

    const getAreas = async () => {
        setlsLoad(true)
        try {
            
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            const areas = res.data.meals
            const areasName = areas.map((area)=>(area.strArea))
            console.log(areasName);
            setAllAreas(areasName)
        } catch (err) {
            console.log(err + 'from areas ');
            
        } finally {
            setlsLoad(false)
        }
        
    }  

    useEffect(() => {
        getAreas()
    },[])
    return <>
        <h1 className='text-center mb-5'>Areas</h1>


        {isLoad ? <h1>loading...</h1> : <>
            <div className='container '>

                <ul className=" grid-cols-2 ml-20 grid md:grid-cols-4 gap-4 ">

                    {allAreas?.map((area,index) => (
                        <li key={index} className="area-list flex items-center gap-2 text-[#1ec778] ">
                            <i className="fa-solid fa-earth-americas"></i>
                            <span className='text-[#08653a] '>

                                {area}
                            </span>
                        </li>
                    ))}
            </ul>
            </div>
        </>}
    </>
}
