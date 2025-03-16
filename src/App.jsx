import {Route, Routes} from "react-router";
import Home from "./Pages/Home";
import ElectricVehiclesPage from "./Pages/ElectricVehiclesPage";
import CharginStationsPage from "./Pages/CharginStationsPage";
import EVCompare from "./Pages/EVCompare";
import ResourcesPage from "./Pages/ResourcesPage";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electric-vehicles" element={<ElectricVehiclesPage />} />
        <Route path="/charging-stations" element={<CharginStationsPage />} />
        <Route path="/ev-compare" element={<EVCompare />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </>
  );
}

export default App;
