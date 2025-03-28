import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../../features/compareEV/compareSlice';

function OnComparedCarsB() {
    const compareCars = useSelector((state) => state.compare.cars);
    const dispatch = useDispatch();

    const handleRemoveCar = (carId) => {
        dispatch(removeCar({ id: carId }));
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {compareCars.length > 0 && (
                <div className="flex gap-4">
                    {/* First Car */}
                    <div className="relative bg-white p-4 rounded-lg shadow-lg justify-items-center ">
                        {/* Car image */}
                        <div
                            className="w-16 h-16 bg-cover bg-center rounded-full"
                            style={{ backgroundImage: `url(${compareCars[0].car_image})` }}
                        ></div>

                        {/* Car details and remove button */}
                        <div className="flex flex-col justify-between items-center">
                            <p className="text-[#111318] text-base font-medium leading-normal line-clamp-1">{compareCars[0].car_name}</p>
                            <p className='text-[#616b89] text-sm font-normal leading-normal line-clamp-2'>{compareCars[0].car_model} - {compareCars[0].car_year}</p>
                            <button
                                onClick={() => handleRemoveCar(compareCars[0].id)}
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                            >
                                <span className="text-xl">×</span>
                            </button>
                        </div>
                    </div>

                    {/* Second Car */}
                    {compareCars.length > 1 && (
                        <div className="relative  bg-white p-4 rounded-lg shadow-lg justify-items-center ">
                            {/* Car image */}
                            <div
                                className="w-16 h-16 bg-cover bg-center rounded-full"
                                style={{ backgroundImage: `url(${compareCars[1].car_image})` }}
                            ></div>

                            {/* Car details and remove button */}
                            <div className="flex flex-col justify-between items-center">
                                <p className="text-[#111318] text-base font-medium leading-normal line-clamp-1">{compareCars[1].car_name}</p>
                                <p className='text-[#616b89] text-sm font-normal leading-normal line-clamp-2'>{compareCars[1].car_model} - {compareCars[1].car_year}</p>
                                <button
                                    onClick={() => handleRemoveCar(compareCars[1].id)}
                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                >
                                    <span className="text-xl">×</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Compare Button */}
            {compareCars.length > 1 && (
                <button className="mt-4 w-full hover:bg-sky-500/75 bg-sky-500/100 text-white py-2 rounded-lg ">
                    Compare
                </button>
            )}
        </div>
    );
}

export default OnComparedCarsB;
