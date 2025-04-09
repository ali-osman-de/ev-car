import Home from "./Pages/Home";
import ElectricVehiclesPage from "./Pages/ElectricVehiclesPage";
import CharginStationsPage from "./Pages/CharginStationsPage";
import ResourcesPage from "./Pages/ResourcesPage";
import EvComparePage from "./Pages/EvComparePage";
import { useRoutes } from 'react-router-dom';
import Header from "./Components/Header";
import ComparedEvCars from "./Pages/ComparedEvCars";
import CarDetailsPage from "./Pages/CarDetailsPage";

function App() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/electric-vehicles", element: <ElectricVehiclesPage /> },
    {
      path: "/electric-vehicles/details-vehicle/:id/:name/:brand/:year",
      element: <CarDetailsPage />
    },
    { path: "/charging-stations", element: <CharginStationsPage /> },
    {
      path: "/ev-compare",
      element: <EvComparePage />,
    },
    {
      path: "/ev-compare/compared-ev-cars/:id/:id2/:name/:name2/:brand/:brand2",
      element: <ComparedEvCars />
    },
    { path: "/resources", element: <ResourcesPage /> }
  ]);

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;
