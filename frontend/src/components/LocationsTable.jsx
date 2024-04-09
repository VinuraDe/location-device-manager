import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography, Button} from "@material-tailwind/react";
import UpdateLocationForm from "../pages/locations/updateLocation";

function LocationTable() {
  const [locations, setLocations] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/locations")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (locationId) => {
    axios.delete(`http://localhost:5000/locations/${locationId}`)
      .then(() => {
        console.log('Location deleted');
        setLocations(locations.filter(location => location._id !== locationId));
      })
      .catch(error => {
        console.error('Error deleting location:', error);
      });
  };

  const handleUpdate = (locationId) => {
    // Use history.push to navigate to the update form page with the locationId
    history.push(`../updateLocation/${locationId}`);
  };

  return (
    <div>
      <Card className="">
        <h1 className="text-2xl font-bold text-center mb-4">Locations</h1>
        <div className="flex justify-center">
          <table className="fixed ml-3 mr-3">
            <thead className="ml-3">
              <tr>
                <th className="border-b border-r-2 p-2 w-1/6 text-center ml-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="opacity-70 font-extrabold"
                  >
                    Name
                  </Typography>
                </th>
                <th className="border-b border-r-2 border-blue-gray-200 bg-blue-gray-50 p-2 w-1/6 font-bold">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="opacity-70 font-extrabold"
                  >
                    Address
                  </Typography>
                </th>
                <th className="border-b border-r-2  bg-blue-gray-50 p-2 w-1/6">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-extrabold opacity-70"
                  >
                    Phone
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-200 bg-blue-gray-50 p-2 w-1/6">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-extrabold opacity-70"
                  >
                    Actions
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location) => (
                <tr key={location._id}>
                  <td className="p-2 font-semibold">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex justify-center font-semibold"
                    >
                      {location.name}
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex justify-center font-semibold"
                    >
                      {location.address}
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex justify-center font-semibold"
                    >
                      {location.phone}
                    </Typography>
                  </td>
                  <td className="p-2 flex gap-2 flex justify-center">
                    <Button className="text-white bg-gray-800 hover:bg-gray-700 font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(location._id)}
                    >
                      Delete
                    </Button>
                    <Button className="text-white bg-gray-800 hover:bg-gray-700 font-bold py-2 px-4 rounded"
                      onClick={() => handleUpdate(location._id)}
                    >
                      Update
                    </Button>
                    <Button className="text-white bg-gray-800 hover:bg-gray-700 font-bold py-2 px-4 rounded"
                      onClick={() => handleView(location._id)}
                    >
                      View Devices
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default LocationTable;

