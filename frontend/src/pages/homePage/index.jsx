import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500">
      <h1 className="text-4xl font-bold mb-8">Welcome to Location Device Manager</h1>
      <Link to="/manage">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6">
        Manage Locations and Devices
      </button>
      </Link>
    </div>
  );
}

export default HomePage;
