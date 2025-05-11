import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const Body = () => {
  const user = useSelector((store) => store.user);

  if (!user) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <div className="pt-16 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-6">
          Welcome, {user.displayName || user.email}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Movie content will go here */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Featured Movies</h2>
            <p className="text-gray-400">Coming soon...</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Popular Now</h2>
            <p className="text-gray-400">Coming soon...</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">New Releases</h2>
            <p className="text-gray-400">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
