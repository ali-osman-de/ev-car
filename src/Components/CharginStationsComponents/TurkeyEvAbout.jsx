import React from 'react';
import { Progress } from 'antd';
import { MdOutlineEvStation } from "react-icons/md";
import { BsEvStation } from "react-icons/bs";


function TurkeyEvAbout({
    acPercent,
    dcPercent,
    cityProgress,
    ExampleData,
    exampleDataCitiesCount }) {

    return (
        <>
            <div className='flex justify-center align-center'>
                <div className='flex flex-col md:flex-row align-center gap-5 md:gap-10'>
                    <div className="justify-center text-center shadow-xl p-10 rounded-xl" >
                        <Progress
                            type="circle"
                            percent={acPercent}
                            status='success'
                            format={() => `${ExampleData[0].count}`}
                        />

                        <div className='flex justify-center items-center mt-5'>
                            <MdOutlineEvStation size={32} className='text-green-600' />
                            <span className="block text-green-600 text-xl">AC
                            </span>
                        </div>
                    </div>

                    <div className="justify-center text-center shadow-xl p-10 rounded-xl">
                        <Progress
                            type="circle"
                            percent={dcPercent}
                            status="exception"
                            format={() => `${ExampleData[1].count}`}
                        />

                        <div className='flex justify-center items-center mt-5'>
                            <BsEvStation size={26} className='text-red-600' />
                            <span className="block text-red-600 text-xl"> DC
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center gap-5 shadow-xl p-5 rounded-xl">
                        {exampleDataCitiesCount.map((city, index) => (
                            <div key={city.cityName} className="flex items-center justify-between w-full gap-10">
                                <span className="text-blue-600 text-lg text-start flex-1">
                                    {city.cityName}
                                </span>
                                <Progress
                                    type="circle"
                                    size={36}
                                    status="normal"
                                    percent={(cityProgress[index] / city.count) * 100}
                                    format={() => `${cityProgress[index]}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TurkeyEvAbout;