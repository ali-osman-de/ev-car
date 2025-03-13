import React from 'react'
import Header from '../Components/Header'
import CompareResultCars from '../Components/CompareResultCars'

function EVCompare() {
    return (
        <>
            <Header />
            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-[#111318] tracking-light text-[32px] font-bold leading-tight">
                                Compare Electric Cars
                            </p>
                            <p className="text-stone-5r00 text-sm font-normal leading-normal">
                                Add up to 2 cars to compare
                            </p>
                        </div>
                    </div>
                    <div className="px-4 py-3">
                        <label className="flex flex-col min-w-40 h-12 w-full">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                <div
                                    className="text-[#616b89] flex border-none bg-[#f0f1f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                    data-icon="MagnifyingGlass"
                                    data-size="24px"
                                    data-weight="regular"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="24px"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    placeholder="Search for a car"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-0 focus:ring-0 border-none bg-[#f0f1f4] focus:border-none h-full placeholder:text-[#616b89] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"

                                />
                            </div>
                        </label>
                    </div>

                    {/* Search Results */}

                    <CompareResultCars />


                    <div className="flex justify-center px-4 py-3">
                        <button
                            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12  flex-1 hover:bg-sky-500/75 bg-sky-500/100 text-white text-base font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Find Cars</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EVCompare