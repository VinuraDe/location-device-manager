import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddLocation() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = { name, address, phone };

    axios
      .post("http://localhost:5000/locations", newLocation)
      .then((response) => {
        toast.success("Location created successfully!");
        console.log("Location created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating location:", error);
        toast.error("Failed to create location.");
      });

    setName("");
    setAddress("");
    setPhone("");
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4 mt-5 ">
          <h1 className="text-2xl font-bold text-center">Add Location</h1>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt- block w-full bg-slate-100 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-bold text-gray-700">
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full bg-slate-200 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-gray-700"
          >
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full bg-slate-200 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2  font-medium rounded text-white bg-gray-800 hover:bg-gray-700 "
        >
          Create Location
        </button>
      </form>
    </main>
  );
}

export default AddLocation;
