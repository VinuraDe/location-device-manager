import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600">
      <h1 className="text-4xl font-bold mb-8">Welcome to Locations and Device Manager</h1>
      <Link to="/locations">
      <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6">
        Manage Locations and Devices
      </button>
      </Link>
    </div>
  );
}

export default HomePage;
