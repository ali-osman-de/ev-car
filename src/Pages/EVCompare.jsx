import React, { useState, useEffect } from 'react';
import CompareResultCars from '../Components/CompareResultCars';

function EVCompare() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        // API'den veri çek
        fetch('http://127.0.0.1:5000/cars')
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    useEffect(() => {
        // Arama terimine göre filtreleme
        if (searchTerm) {
            setFilteredCars(
                cars.filter(car =>
                    car.car_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    car.car_model.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFilteredCars([]);
        }
    }, [searchTerm, cars]);

    return (
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
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
                    <div className="px-4 py-3">
                        {filteredCars.length > 0 ? (
                            filteredCars.map((car) => (
                                <div key={car.id} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
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
                                    <div className="shrink-0">
                                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-200 hover:bg-gray-300 text-[#111318] text-sm font-medium leading-normal w-fit">
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
                    <CompareResultCars />
                )}

                <div className="flex justify-center px-4 py-3">
                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 flex-1 hover:bg-sky-500/75 bg-sky-500/100 text-white text-base font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Find Cars</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EVCompare;
