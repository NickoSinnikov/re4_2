import React from 'react';

export default function DistanceList() {
  return (
    <div className="distance-list">
      <ul className="list-header">
        <li>Дата</li>
        <li>Пройдено км</li>
        <li>Действия</li>
      </ul>
      <div className="list-table"></div>
    </div>
  );
}
