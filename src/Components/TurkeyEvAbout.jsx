import React, { useState, useEffect } from 'react';
import { Progress, Flex } from 'antd';
import { MdOutlineEvStation } from "react-icons/md";
import { BsEvStation } from "react-icons/bs";

const exampleDataCitiesCount = [
    {
        "cityName": "İSTANBUL",
        "AC": 6048,
        "DC": 2413,
        "count": 8461
    },
    {
        "cityName": "ANKARA",
        "AC": 2197,
        "DC": 1184,
        "count": 3381
    },
    {
        "cityName": "ANTALYA",
        "AC": 1100,
        "DC": 554,
        "count": 1654
    },
    {
        "cityName": "BURSA",
        "AC": 880,
        "DC": 693,
        "count": 1573
    }
];

const ExampleData = [
    {
        connectorType: "AC",
        count: "16665"
    },
    {
        connectorType: "DC",
        count: "11637"
    }
];

function TurkeyEvAbout() {
    const [acPercent, setAcPercent] = useState(0);
    const [dcPercent, setDcPercent] = useState(0);
    const [cityProgress, setCityProgress] = useState(exampleDataCitiesCount.map(() => 0));

    const maxACPercent = (parseInt(ExampleData[0].count) / (parseInt(ExampleData[0].count) + parseInt(ExampleData[1].count)) * 100);
    const maxDCPercent = (parseInt(ExampleData[1].count) / (parseInt(ExampleData[0].count) + parseInt(ExampleData[1].count)) * 100);

    // Animasyon süresi (5 saniye)
    const animationDuration = 5000; // 5 saniye
    const steps = 100; // Animasyon adım sayısı
    const stepDuration = animationDuration / steps; // Her adımın süresi

    useEffect(() => {
        const acInterval = setInterval(() => {
            setAcPercent((prev) => {
                if (prev === maxACPercent) {
                    clearInterval(acInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 30);

        const dcInterval = setInterval(() => {
            setDcPercent((prev) => {
                if (prev === maxDCPercent) {
                    clearInterval(dcInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 30);

        // Şehirlerin animasyonu
        const cityIntervals = exampleDataCitiesCount.map((city, index) => {
            let cityStep = 0;
            return setInterval(() => {
                setCityProgress((prev) => {
                    const newProgress = [...prev];
                    if (cityStep >= steps) {
                        newProgress[index] = city.count;
                        return newProgress;
                    }
                    cityStep++;
                    newProgress[index] = Math.round((cityStep / steps) * city.count);
                    return newProgress;
                });
            }, stepDuration);
        });

        return () => {
            clearInterval(acInterval);
            clearInterval(dcInterval);
            cityIntervals.forEach(interval => clearInterval(interval));
        };
    }, [maxACPercent, maxDCPercent]);

    return (
        <>
            <div className='flex justify-center align-center'>
                <Flex gap="middle" align="center">
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
                </Flex>
            </div>
        </>
    );
}

export default TurkeyEvAbout;