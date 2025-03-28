import Home from "./Pages/Home";
import ElectricVehiclesPage from "./Pages/ElectricVehiclesPage";
import CharginStationsPage from "./Pages/CharginStationsPage";
import ResourcesPage from "./Pages/ResourcesPage";
import EvComparePage from "./Pages/EvComparePage";
import { useRoutes } from 'react-router-dom';
import Header from "./Components/Header";

function App() {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/electric-vehicles", element: <ElectricVehiclesPage /> },
    { path: "/charging-stations", element: <CharginStationsPage /> },
    { path: "/ev-compare", element: <EvComparePage /> },
    { path: "/resources", element: <ResourcesPage /> }
  ]);

  return (
    <>
      <Header />
      {routes}
    </>
  )
}

export default App;
