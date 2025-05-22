import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../../features/compareEV/compareSlice';
import { useNavigate } from 'react-router';

function OnComparedCarsB() {
    const navigate = useNavigate();
    const compareCars = useSelector((state) => state.compare.cars);
    const dispatch = useDispatch();

    const handleRemoveCar = (carId) => {
        dispatch(removeCar({ id: carId }));
    }

    const handleNavigate = () => {
        const car1 = compareCars[0];
        const car2 = compareCars[1];
        navigate(`/ev-compare/compared-ev-cars/${car1.id}/${car2.id}/${car1.car_name}/${car2.car_name}/${car1.car_model}/${car2.car_model}`);

      };

    return (
        <div className="fixed bottom-4 right-4 z-50 ">
            {compareCars.length > 0 && (
                <div className="flex gap-4">
                    {compareCars.map((car) => (
                        <div key={car.id} className="relative bg-white p-4 rounded-lg shadow-lg justify-items-center max-w-40">

                            <div
                                className="w-16 h-16 bg-cover bg-center rounded-full"
                                style={{ backgroundImage: `url(${car.car_image})` }}
                            ></div>

                            <div className="flex flex-col justify-between items-center ">
                                <p className="text-[#111318] text-base font-medium leading-normal line-clamp-1 ">{car.car_name}</p>
                                <p className='text-[#616b89] text-sm font-normal leading-normal line-clamp-1 text-wrap'>{car.car_model} - {car.car_year}</p>
                                <button
                                    onClick={() => handleRemoveCar(car.id)}
                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                >
                                    <span className="text-xl">×</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {compareCars.length > 1 && (
                <button onClick={handleNavigate} className="mt-4 w-full hover:bg-sky-500/75 bg-sky-500/100 text-white py-2 rounded-lg ">
                    Compare
                </button>
            )}
        </div>
    );
}

export default OnComparedCarsB;
