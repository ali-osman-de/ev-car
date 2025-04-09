import React from 'react'
import VehicleDetail from '../Components/ElectricVehiclesComponents/VehicleDetailsComponents/VehicleDetail';
import { useLocation } from 'react-router';

function CarDetailsPage() {

    const location = useLocation();
    const car = location.state;


    return (

        <div className="flex justify-center items-center h-screen">
            <div className="flex gap-5 max-w-[960px]">
                <VehicleDetail car={car} />
            </div>
        </div>

    )


}

export default CarDetailsPage