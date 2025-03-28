import MapEVContainer from '../Components/CharginStationsComponents/MapEVContainer';
import EVsChargerSuppliers from '../Components/CharginStationsComponents/EVsChargerSuppliers';
import TurkeyEvAbout from '../Components/CharginStationsComponents/TurkeyEvAbout';
import React, { useState, useEffect } from 'react';


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



function CharginStationsPage() {

    const [acPercent, setAcPercent] = useState(0);
    const [dcPercent, setDcPercent] = useState(0);
    const [cityProgress, setCityProgress] = useState(exampleDataCitiesCount.map(() => 0));

    const maxACPercent = (parseInt(ExampleData[0].count) / (parseInt(ExampleData[0].count) + parseInt(ExampleData[1].count)) * 100);
    const maxDCPercent = (parseInt(ExampleData[1].count) / (parseInt(ExampleData[0].count) + parseInt(ExampleData[1].count)) * 100);

    const animationDuration = 5000;
    const steps = 100;
    const stepDuration = animationDuration / steps;

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
            <div className="px-40 flex flex-1 justify-center py-5 ">
                <div>
                    <MapEVContainer />
                    <h2 className="sm:text-lg md:text-xl lg:text-2xl font-base text-light text-center leading-tight px-4 pb-3 pt-10">
                        Map Includes EVs Charger Providers
                    </h2>
                    <EVsChargerSuppliers />
                    <h2 className="sm:text-lg md:text-xl lg:text-3xl font-base text-light text-center leading-tight px-4 pb-3 pt-10">
                        All Statistics
                    </h2>
                    <TurkeyEvAbout
                        acPercent={acPercent}
                        dcPercent={dcPercent}
                        cityProgress={cityProgress}
                        ExampleData={ExampleData}
                        exampleDataCitiesCount={exampleDataCitiesCount}
                    />
                </div>
            </div>
        </>
    );
}

export default CharginStationsPage;