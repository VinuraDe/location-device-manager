import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/homePage";
import LocationsPage from "./pages/locations";
import DevicesPage from "./pages/devices";
import AddLocation from "./pages/locations/addLocation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="devices" element={<DevicesPage />} />
          <Route path="locations/addLocation" element={<AddLocation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
