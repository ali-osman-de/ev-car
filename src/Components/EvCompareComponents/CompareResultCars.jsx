import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, removeCar, removeAllCars } from '../../features/compareEV/compareSlice'

function CompareResultCars({
    exampleCars
}) {
    const dispatch = useDispatch()
    // console.log(compareCars)



    return (
        <>
            {exampleCars.map((car) => (
                <div
                    key={car.id}
                    className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between"
                >

                    <div className="flex items-center gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-20"
                            style={{ backgroundImage: `url(${car.car_image})` }}
                        ></div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#111318] text-base font-medium leading-normal line-clamp-1">
                                {car.car_name}
                            </p>
                            <p className="text-[#616b89] text-sm font-normal leading-normal line-clamp-2">
                                {car.car_model}
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center gap-4">
                        {/* Küçük Ekranlarda Göster, Orta ve Büyük Ekranlarda Gizli */}
                        <div >
                            <button
                                className="flex cursor-pointer items-center justify-center rounded-xl h-8 px-4 bg-gray-200 hover:bg-gray-300 text-[#111318] text-sm font-medium leading-normal w-fit"
                                onClick={() => dispatch(addCar(car))}
                            >
                                <span className="truncate">Add to Compare</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CompareResultCars;