import React from "react";


export default function DistanceListItem(props){

    const {data, onDel} = props;
    const delDistance =()=>{
        onDel(data.date);
    }
    return (
        <div className="list-item">
          
            <span className="list-date">{data.date.replace(/(\d+)-(\d+)-(\d+)/, '$3.$2.$1')}</span>
            <span className="list-distance">{data.distance}</span>
          
          <div className="list-actions">
            <button className="edit">✎</button>
            <button className="delete" onClick={delDistance}>
              ✘
            </button>
          </div>
        </div>
    )
}