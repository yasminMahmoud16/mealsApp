import { Outlet } from 'react-router-dom'
import Slider from '../Components/Slider/Slider'

export default function RouterLayout() {
    return <>
        <section>
            <div className="container">

                <div className="gird grid-col-6">
                    <div className='col-span-4'>

                    <Slider />
                    </div>
                    <div className="col-span-2">
                    <Outlet/>

                    </div>
                </div>
            </div>
        </section>
    </>
}
