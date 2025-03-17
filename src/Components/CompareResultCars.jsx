import React from 'react';

function CompareResultCars() {
    const exampleCars = [
        {
            image: 'https://cdn.usegalileo.ai/sdxl10/acc058bb-fceb-4290-827c-36d9b4a3b7e9.png',
            model: 'Tesla Model 3',
            description: '2021 Model 3 Standard Range Plus',
        },
        {
            image: 'https://cdn.usegalileo.ai/sdxl10/4dc810bf-3a08-4a1f-b563-e11f58a51c0f.png',
            model: 'Tesla Model Y',
            description: '2021 Model Y Long Range',
        },
        {
            image: 'https://cdn.usegalileo.ai/sdxl10/e1369368-65df-4bb1-9236-7af3b3dbdf8d.png',
            model: 'Ford Mustang Mach-E',
            description: '2021 Mustang Mach-E Premium',
        },
        {
            image: 'https://cdn.usegalileo.ai/sdxl10/985ae6ca-1823-41a8-9711-bd24b77d3f33.png',
            model: 'Volkswagen ID.4',
            description: '2021 ID.4 Pro S',
        },
    ];

    return (
        <>
            {exampleCars.map((car, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between"
                >
                    {/* Araba Bilgileri */}
                    <div className="flex items-center gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-20"
                            style={{ backgroundImage: `url(${car.image})` }}
                        ></div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#111318] text-base font-medium leading-normal line-clamp-1">
                                {car.model}
                            </p>
                            <p className="text-[#616b89] text-sm font-normal leading-normal line-clamp-2">
                                {car.description}
                            </p>
                        </div>
                    </div>

                    {/* Butonlar */}
                    <div className="flex items-center gap-4">
                        {/* Küçük Ekranlarda Gizli, Orta ve Büyük Ekranlarda Göster */}
                        <div className="hidden sm:block">
                            <button
                                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-gray-200 hover:bg-gray-300 text-[#111318] text-sm font-medium leading-normal w-fit"
                            >
                                <span className="truncate">Add to Compare</span>
                            </button>
                        </div>

                        {/* Küçük Ekranlarda Göster, Orta ve Büyük Ekranlarda Gizli */}
                        <div className="sm:hidden">
                            <button
                                className="flex cursor-pointer items-center justify-center rounded-xl h-8 px-4 bg-gray-200 hover:bg-gray-300 text-[#111318] text-sm font-medium leading-normal w-fit"
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