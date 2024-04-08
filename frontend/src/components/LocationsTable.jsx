import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

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
  


  const handleUpdate = (id) => {
    // Implement update logic here
    console.log(`Update location with id ${id}`);
  };

  const handleView = (id) => {
    // Implement view logic here
    console.log(`View location with id ${id}`);
  };

  return (
    <div>
      <Card>
        <h1 className="text-2xl font-semibold text-center">Locations</h1>
        <div className="flex justify-center">
          <table className="table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Name
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Address
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Phone
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-2"></th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location) => (
                <tr key={location._id}>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {location.name}
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {location.address}
                    </Typography>
                  </td>
                  <td className="p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {location.phone}
                    </Typography>
                  </td>
                  <td className="p-2 flex gap-2">
                    <Button
                      onClick={() => handleDelete(location._id)}
                      ripple="light"
                      className="bg-red-500 hover:bg-red-800 text-white"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => handleUpdate(location._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => handleView(location._id)}
                      className="bg-gray-500 hover:bg-gray-600 text-white"
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
