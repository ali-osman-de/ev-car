import { useEffect, useState } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc: "hatchback.png",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc: "suv.png",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc: "sedan.png",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc: "van.png",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   {
//     id: 5,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc: "sedan.png",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 6,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc: "van.png",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 7,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc: "suv.png",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 8,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc: "hatchback.png",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
// ];

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {

    fetch('https://evcarbackend.onrender.com/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto md:w-xl lg:w-2xl xl:w-4xl">

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {cars.map((car) => (
            <a key={car.id} className="group">
              <img
                alt={car.car_name}
                src={car.car_image}
                className=" rounded-lg bg-gray-200 object-cover group-hover:opacity-75 aspect-7/8 md:aspect-5/4 xl:aspect-5/4"
              />
              <h3 className="mt-4 text-xl text-gray-700">{car.car_name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-500">{car.car_model}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
