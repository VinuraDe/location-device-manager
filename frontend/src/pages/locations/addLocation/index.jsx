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
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center">Add Location</h1>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full bg-slate-200 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-medium text-gray-700">
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
            className="block text-sm font-medium text-gray-700"
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
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Location
        </button>
      </form>
    </main>
  );
}

export default AddLocation;
