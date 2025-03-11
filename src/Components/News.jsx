import React from 'react'

function News() {
    return (
        <div className="flex flex-wrap grid grid-flow-col grid-rows-4 md:grid-rows-2 lg:grid-rows-2 gap-4 p-4">
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl relative"
                style={{ backgroundImage: `url(./van.png)` }}
            >
                <p className="text-white absolute text-xl left-4 bottom-4 right-4 truncate">
                    2025 Subaru Outback Review: An Oldie but Very, Very Goodie
                </p>
            </div>
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl relative"
                style={{ backgroundImage: `url(./motorcycle.png)` }}
            >
                <p className="text-white absolute text-xl left-4 bottom-4 right-4 truncate">
                    How Much Is the 2025 Nissan Z?
                </p>
            </div>
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl relative"
                style={{ backgroundImage: `url(./sedan.png)` }}
            >
                <p className="text-white absolute text-xl left-4 bottom-4 right-4 truncate">
                    177,000-Plus VW Atlas, Atlas Cross Sport SUVs Recalled for Engine Cover Fire Risk
                </p>
            </div>
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl relative"
                style={{ backgroundImage: `url(./truck.png)` }}
            >
                <p className="text-white absolute text-xl left-4 bottom-4 right-4 truncate">
                    Is the 2025 Toyota Crown Signia a Good SUV? 4 Pros, 2 Cons
                </p>

            </div>
        </div>
    )
}

export default News