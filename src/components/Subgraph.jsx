import React from 'react';
import { Link } from 'react-router-dom';

const Subgraph = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Subgraphs</h1>

      <div className="flex space-x-4 mb-4">
        <Link
          to="/query-subgraph"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Query Subgraph
        </Link>
        <Link
          to="/create-subgraph"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Create Subgraph
        </Link>
      </div>

 
    </div>
  );
};

export default Subgraph;
