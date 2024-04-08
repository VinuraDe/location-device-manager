import React from "react";
import Locations from "../../components/LocationsTable";
import Button from "@material-tailwind/react";
import { Link } from "react-router-dom";

function LocationsPage() {
return (
    <main>
        <a href="/locations/addLocation" className=" align-text-bottom font-bold text-black bg-green-300 hover:bg-green-500 rounded ">Add Location</a>
        <Locations />
    </main>
);
}

export default LocationsPage;
