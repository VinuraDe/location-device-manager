import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Typography } from '@material-tailwind/react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

function UpdateLocationForm({ location, onUpdate }) {
  const [name, setName] = useState(location.name);
  const [address, setAddress] = useState(location.address);
  const [phone, setPhone] = useState(location.phone);
  const { id } = useParams(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLocation = { name, address, phone };

    axios.put(`http://localhost:5000/locations/${id}`, updatedLocation) 
      .then(() => {
        console.log('Location updated');
        onUpdate(updatedLocation);
      })
      .catch(error => {
        console.error('Error updating location:', error);
        // Optionally, you can show an error message here
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className=" bg-white w-1/3 align-middle      ">
        <div className="space-y-4">
          <Typography color="blueGray" size="lg" bold>
            Name:
          </Typography>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-200 rounded p-2"
          />
          <Typography color="blueGray" size="lg" bold>
            Address:
          </Typography>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full bg-slate-200 rounded p-2"
          />
          <Typography color="blueGray" size="lg" bold>
            Phone:
          </Typography>
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-slate-200 rounded p-2"
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded">
            Update Location
          </Button>
        </div>
      </form>
    </main>
  );
}

export default UpdateLocationForm;
