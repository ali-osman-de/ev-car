// import CarFiltering from "../Components/CarFiltering";
import CarList from "../../Components/ElectricVehiclesComponents/CarList";
import { useEffect, useState } from "react";

export default function ElectricVehiclesPage() {

  const [cars, setCars] = useState([]);

  useEffect(() => {

    fetch('https://evcarbackend.onrender.com/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);



  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[960px] justify-center">
        <CarList cars={cars} />
      </div>
    </div>
  );
}
