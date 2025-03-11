import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import ElectricVehiclesPage from "./Pages/ElectricVehiclesPage"
import CharginStationsPage from "./Pages/CharginStationsPage"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electric-vehicles" element={<ElectricVehiclesPage />} />
        <Route path="/charging-stations" element={<CharginStationsPage />} />
      </Routes>
    </>
  )
}

export default App
