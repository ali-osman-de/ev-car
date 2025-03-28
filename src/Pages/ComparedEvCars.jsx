import { useSelector } from 'react-redux';
import { FaTurkishLiraSign } from "react-icons/fa6";

const ComparedEvCars = () => {
  const compareCars = useSelector((state) => state.compare.cars);
  console.log(compareCars);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-5 max-w-[960px]">
        {/* First card */}
        <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
          <img
            src={compareCars[0]?.car_image}
            alt={compareCars[0]?.car_name}
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">{compareCars[0]?.car_name}</h2>
          <p className="text-gray-500">{compareCars[0]?.car_model}</p>
          <p className="text-gray-400">{compareCars[0]?.car_year}</p>

          <div className="mt-4">
            <div>
              <p className="text-sm text-gray-600 py-2  border-gray-300">Price: {compareCars[0]?.price}</p>
              <FaTurkishLiraSign />
            </div>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Range: {compareCars[0]?.car_range} km</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Top Speed: {compareCars[0]?.top_speed} km/h</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Acceleration: {compareCars[0]?.acceleration} s (0-100 km/h)</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Battery Capacity: {compareCars[0]?.battery_capacity} kWh</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Seating Capacity: {compareCars[0]?.seating_capacity}</p>
          </div>
        </div>

        {/* Second card */}
        <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
          <img
            src={compareCars[1]?.car_image}
            alt={compareCars[1]?.car_name}
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">{compareCars[1]?.car_name}</h2>
          <p className="text-gray-500">{compareCars[1]?.car_model}</p>
          <p className="text-gray-400">{compareCars[1]?.car_year}</p>

          <div className="mt-4">
            <p className="text-sm text-gray-600 py-2  border-gray-300">Price: ${compareCars[1]?.price}</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Range: {compareCars[1]?.car_range} km</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Top Speed: {compareCars[1]?.top_speed} km/h</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Acceleration: {compareCars[1]?.acceleration} s (0-100 km/h)</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Battery Capacity: {compareCars[1]?.battery_capacity} kWh</p>
            <p className="text-sm text-gray-600 py-2 border-t border-gray-300">Seating Capacity: {compareCars[1]?.seating_capacity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparedEvCars;
