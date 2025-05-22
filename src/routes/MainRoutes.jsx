import Home from '../pages/Home/Home';
import ElectricVehiclesPage from '../pages/ElectricVehiclesPage/ElectricVehiclesPage';
import CarDetailsPage from '../pages/CarDetailsPage/CarDetailsPage';
import CharginStationsPage from '../pages/CharginStationsPage/CharginStationsPage';
import EvComparePage from '../pages/EvComparePage/EvComparePage';
import ComparedEvCars from '../pages/ComparedEvCars/ComparedEvCars';
import ResourcesPage from '../pages/Resources/ResourcesPage';
import { useRoutes } from 'react-router';

function MainRoutes() {

    
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
            {routes}
        </>
    )
}

export default MainRoutes