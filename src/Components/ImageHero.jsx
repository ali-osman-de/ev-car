import React from 'react'

function ImageHero() {
    return (

            <div
                className="mt-10 flex h-75 w-100 md:h-100 md:w-150 lg:h-150 lg:w-250 flex-col gap-6 bg-cover bg-center bg-no-repeat gap-8 rounded-xl items-center justify-center p-4"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(/carev.png)',
                }}
            >
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] text-center">
                    Find your perfect electric car
                </h1>
                <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] sm:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                        <div
                            className="text-[#616b89] flex border border-[#dbdee6] bg-white items-center justify-center pl-4 rounded-l-xl border-r-0"
                            data-icon="MagnifyingGlass"
                            data-size="20px"
                            data-weight="regular"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a model, brand, etc."
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] focus:outline-none focus:ring-0 border border-[#dbdee6] bg-white focus:border-[#dbdee6] h-full placeholder:text-[#616b89] px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal"
                        />
                        <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dbdee6] bg-white pr-2">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em] hover:bg-blue-500"
                            >
                                <span className="truncate">Search</span>
                            </button>
                        </div>
                    </div>
                </label>
            </div>
     
    )
}

export default ImageHero