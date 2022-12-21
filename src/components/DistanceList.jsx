import React from 'react';
import moment from 'moment';
export default function DistanceList(props) {
  const {distanceList} = props;
  const listSort = distanceList.sort((a, b) => moment(b.date, 'DD.MM.YY') - moment(a.date, 'DD.MM.YY'));
  return (
    <>
      <ul className="list-header">
        <li>Дата</li>
        <li>Пройдено км</li>
        <li>Действия</li>
      </ul>
      <div className="distance-list">
            {listSort.map(item => <><span className="widget-date">{item.date}</span><span className="widget-distance">{item.distance}</span></>)}
            {/*<div className="Widget-Actions">
                <button className="Edit">✎</button>
                <button className="Delete" onClick={onDelRecord}>✘</button>
  </div>*/}
        </div>
        </>
    
  );
}
