import React from 'react'

function BrowseCategory() {
    const categories = [
        {
            name: 'Sedans',
            imageUrl: '/sedan.png',
        },
        {
            name: 'SUVs',
            imageUrl: '/suv.png',
        },
        {
            name: 'Hatchbacks',
            imageUrl: '/hatchback.png',
        },
        {
            name: 'Trucks',
            imageUrl: '/truck.png',
        },
        {
            name: 'Vans',
            imageUrl: '/van.png',
        },
        {
            name: 'Motorcycles',
            imageUrl: '/motorcycle.png',
        },
    ];

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(236px,1fr))] gap-3 p-4">
            {categories.map((category, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                        style={{ backgroundImage: `url(${category.imageUrl})` }}
                    ></div>
                    <p className="text-[#111318] text-base font-medium leading-normal">{category.name}</p>
                </div>
            ))}
        </div>
    )
}

export default BrowseCategory