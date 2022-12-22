import React from "react";
import DistanceListItem from "./DistanceListItem";
export default function DistanceList(props) {
  const { distanceList, deleteDistanceItem } = props;
  const listSort = distanceList.sort((a, b) => b.dateFormat - a.dateFormat);
  console.log(listSort);

  const deleteHandler = (date) => {
    deleteDistanceItem(date);
  };
  return (
    <div className="list">
      <ul className="list-header">
        <li>Дата</li>
        <li>Пройдено км</li>
        <li>Действия</li>
      </ul>

      {listSort.map((item) => (
      <DistanceListItem data={item} onDel={deleteHandler}/>
      ))}
    </div>
  );
}
