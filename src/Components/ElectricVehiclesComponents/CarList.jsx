export default function CarList({ cars }) {

  return (
    <>
      <div>
        <h2 className="text-2xl sm:text-2xl md:text-4xl my-3 sm:my-5 md:my-6 font-medium whitespace-nowrap">
          Electric Vehicles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 place-items-center">
        {cars.map((car) => (
          <div key={car.id} className="flex flex-col items-center w-3xs lg:w-3xs xl:w-md 2xl:w-xs md:w-4xs max-w-[320px] p-4">
            <div
              className="w-full h-48 sm:h-56 md:h-64 rounded-lg bg-gray-200 bg-center bg-no-repeat bg-cover hover:opacity-75 transition-opacity duration-300"
              style={{ backgroundImage: `url(${car.car_image})` }}
            >
            </div>

            <h3 className="mt-2 text-base sm:text-lg md:text-xl font-medium text-gray-900 w-full truncate" >
              {car.car_name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-500 w-full truncate">
              {car.car_model}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
