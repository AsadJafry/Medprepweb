import React from 'react';
import './TwoColumnedTable.css'; // Assuming you have a CSS file for styling

const TwoColumnedTable = ({ table, col1Header, col2Header }) => {
  return (
    <div className="table-container">
      {/* Header */}
      <div className="table-row table-header">
        <div className="table-col table-quality-header">
          <span>{col1Header}</span>
        </div>
        <div className="table-col table-description-header">
          <span>{col2Header}</span>
        </div>
      </div>

      {/* Data Rows */}
      {table.map((item, index) => (
        <div key={index} className="table-row">
          <div className="table-col table-quality">
            <span>{item.quality}</span>
          </div>
          <div className="table-col table-description">
            <span>{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoColumnedTable;
