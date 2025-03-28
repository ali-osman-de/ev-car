import React from 'react';
import CompareResultCars from './CompareResultCars';
import { useDispatch } from 'react-redux';
import { addCar} from '../../features/compareEV/compareSlice'

function EVCompare(
    {
        filteredCars,
        searchTerm,
        setSearchTerm
    }) {

    // const compareCars = useSelector((state) => state.compare)
    const dispatch = useDispatch()

    // console.log(compareCars);

    const exampleCars = [
        {
            id: 1,
            car_image: 'https://cdn.usegalileo.ai/sdxl10/acc058bb-fceb-4290-827c-36d9b4a3b7e9.png',
            car_name: 'Tesla Model 3',
            car_model: 'Standard Range Plus',
            car_year: "2021"
        },
        {
            id: 2,
            car_image: 'https://cdn.usegalileo.ai/sdxl10/4dc810bf-3a08-4a1f-b563-e11f58a51c0f.png',
            car_name: 'Tesla Model Y',
            car_model: 'Long Range',
            car_year: '2021'
        },
        {
            id: 3,
            car_image: 'https://cdn.usegalileo.ai/sdxl10/e1369368-65df-4bb1-9236-7af3b3dbdf8d.png',
            car_name: 'Ford Mustang Mach-E',
            car_model: 'Premium',
            car_year: '2021'
        },
        {
            id: 4,
            car_image: 'https://cdn.usegalileo.ai/sdxl10/985ae6ca-1823-41a8-9711-bd24b77d3f33.png',
            car_name: 'Volkswagen ID.4',
            car_model: 'Pro S',
            car_year: '2021'
        },
    ];



    return (
        <>
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#111318] tracking-light text-[32px] font-bold leading-tight">
                        Compare Electric Cars
                    </p>
                    <p className="text-stone-500 text-sm font-normal leading-normal">
                        Add up to 2 cars to compare
                    </p>
                </div>
            </div>
            <div className="px-4 py-3">
                <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div className="text-[#616b89] flex border-none bg-[#f0f1f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                            🔍
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a car"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-0 border-none bg-[#f0f1f4] focus:border-none h-full placeholder:text-[#616b89] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </label>
            </div>

            {/* Arama yapılıyorsa listeyi göster, değilse CompareResultCars göster */}
            {searchTerm ? (
                <div>
                    {filteredCars.length > 0 ? (
                        filteredCars.map((car) => (
                            <div key={car.id} className="flex items-center gap-4 bg-white px-4  py-2 justify-between">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-20"
                                        style={{ backgroundImage: `url(${car.car_image})` }}
                                    ></div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-stone-900 text-base font-medium leading-normal line-clamp-1">
                                            {car.car_name}
                                        </p>
                                        <p className="text-stone-500 text-sm font-normal leading-normal line-clamp-2">
                                            {car.car_year} - {car.car_model}
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0" onClick={() => dispatch(addCar(car))}>
                                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-200 hover:bg-gray-300 text-[#111318] text-sm font-medium leading-normal w-fit"
                                    >
                                        <span className="truncate">Add to Compare</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-stone-500 text-sm">No results found.</p>
                    )}
                </div>
            ) : (
                <CompareResultCars exampleCars={exampleCars} />
            )}

            <div className="flex justify-center px-4 py-3">
                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 flex-1 hover:bg-sky-500/75 bg-sky-500/100 text-white text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Find Cars</span>
                </button>
            </div>
        </>
    );
}

export default EVCompare;
