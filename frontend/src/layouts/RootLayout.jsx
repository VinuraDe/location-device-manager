import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

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
