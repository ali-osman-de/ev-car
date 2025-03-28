import React from 'react'

function WhyChooseElectricCar() {
    return (
        <div className="flex flex-col gap-10 px-4 py-5">
            <div className="flex flex-col gap-6 p-5 rounded-lg bg-sky-500/50 ">
                <div className="flex flex-col gap-4">
                    <p className="text-base font-normal leading-normal max-w-[720px]">
                        Electric cars are fun to drive, less expensive to fuel, and better for the environment. Plus, they're quieter and require less maintenance than gas-powered cars.
                    </p>
                </div>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-blue-600  text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] w-fit hover:bg-blue-500"
                >
                    <span className="truncate">Learn more</span>
                </button>
            </div>
        </div>
    )
}

export default WhyChooseElectricCar