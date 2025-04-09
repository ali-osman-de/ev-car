import React from 'react';
import { useSelector } from 'react-redux';
import { FaTurkishLiraSign } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { MdSpeed } from "react-icons/md";
import { PiSpeedometerFill } from "react-icons/pi";
import { PiBatteryWarningFill } from "react-icons/pi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";



function CompareCarDetails() {
    const compareCars = useSelector((state) => state.compare.cars);
    // console.log(compareCars);

    return (
        <div className="flex gap-5">
            {compareCars.map((car, index) => (
                <div key={index} className="flex-1 bg-white p-5 shadow-lg rounded-lg">

                    <img
                        src={car.car_image}
                        alt={car.car_name}
                        className="w-full h-80 rounded-sm mb-4"
                    />
                    <h2 className="text-xl font-semibold">{car.car_name}</h2>
                    <p className="text-gray-500">{car.car_model}</p>
                    <p className="text-gray-400">{car.car_year}</p>

                    <div className="mt-4 ">
                        <div className="flex justify-between items-center gap-2 py-2">
                            <p className="text-sm text-gray-600">Price: {car.price}</p>
                            <FaTurkishLiraSign size={24} />
                        </div>
                        <div className="flex justify-between items-center gap-2 border-t border-gray-300 py-2">
                            <p className="text-sm text-gray-600">Range: {car.car_range} km</p>
                            <GiPathDistance size={24} />
                        </div>
                        <div className="flex justify-between items-center gap-2 border-t border-gray-300 py-2">
                            <p className="text-sm text-gray-600">Top Speed: {car.top_speed} km/h</p>
                            <MdSpeed size={24} />
                        </div>
                        <div className="flex justify-between items-center gap-2 border-t border-gray-300 py-2">
                            <p className="text-sm text-gray-600 ">Acceleration: {car.acceleration} s (0-100 km/h)</p>

                            <PiSpeedometerFill size={24} />
                        </div>
                        <div className="flex justify-between items-center gap-2 border-t border-gray-300 py-2">
                            <p className="text-sm text-gray-600 ">Battery Capacity: {car.battery_capacity} kWh</p>
                            <PiBatteryWarningFill size={24} />
                        </div>
                        <div className="flex justify-between items-center gap-2 border-t border-gray-300 py-2">
                            <p className="text-sm text-gray-600 ">Seating Capacity: {car.seating_capacity}</p>
                            <MdAirlineSeatReclineExtra size={24} />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default CompareCarDetails;