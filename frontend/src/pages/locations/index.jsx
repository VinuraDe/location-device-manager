import React from "react";
import Locations from "../../components/LocationsTable";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function LocationsPage() {
  return (
    <main>

      <div className="flex justify-end mt-3">
        <Button className=" px-4 py-2 font-bold rounded text-white bg-green-700 hover:bg-green-900  focus:ring-indigo-500 items-center">
          <Link to="/locations/addLocation">Add Location</Link>
        </Button>
      </div>

      <Locations />
    </main>
  );
}

export default LocationsPage;
