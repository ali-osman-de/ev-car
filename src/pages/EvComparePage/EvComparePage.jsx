import EVCompare from '../../Components/EvCompareComponents/EVCompare'
import React, { useState, useEffect } from 'react';
import OnComparedCarsB from '../../Components/EvCompareComponents/OnComparedCarsB';


function EvComparePage() {
    const [filteredCars, setFilteredCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cars, setCars] = useState([]);


    useEffect(() => {

        fetch('https://evcarbackend.onrender.com/cars')
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);


    useEffect(() => {

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
                <EVCompare
                    filteredCars={filteredCars}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <OnComparedCarsB />
            </div>
        </div>
    )
}

export default EvComparePage