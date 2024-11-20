import React from 'react';

const ThreeColumnedTable = ({ table, col1Header, col2Header, col3Header }) => {
  return (
    <div className="border border-gray-300 w-full bg-black mt-2">
      {/* Header */}
      <div className="flex bg-black font-bold text-left py-2">
        <div className="flex-1 px-3 text-center">{col1Header}</div>
        <div className="flex-1 px-3">{col2Header}</div>
        <div className="flex-1 px-3 text-center">{col3Header}</div>
      </div>

      {/* Data Rows */}
      {table.map((item, index) => (
        <div key={index} className="flex border-t border-gray-300 py-2">
          <div className="flex-1 px-3 text-center">{item.quality}</div>
          <div className="flex-1 px-3">{item.description}</div>
          <div className="flex-1 px-3 text-center">{item.example}</div>
        </div>
      ))}
    </div>
  );
};

export default ThreeColumnedTable;
