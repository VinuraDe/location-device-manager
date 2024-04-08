import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Locations from "../components/LocationsTable";

const RootLayout = () => {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
