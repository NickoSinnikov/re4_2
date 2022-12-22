import logo from "./logo.svg";
import "./App.css";
import DistanceForm from "./components/DistanceForm";
import DistanceList from "./components/DistanceList";
import { useState } from "react";

function App() {
  const [distanceList, setDistanceList] = useState([]);

  const onAddList = (date, distance) => {
   
    const isExist = distanceList.find((el, i, arr) => {
  
      if (el.date === date) {
        arr[i].distance = Number(arr[i].distance) + Number(distance);
        return true;
      } else {
        return false;
      }
    });
    if (isExist) {
      setDistanceList((prevDistanceList) => [...prevDistanceList]);
    } else {
      setDistanceList((prevDistanceList) => [
        ...prevDistanceList,
        {
          date: date,
          distance: distance,
          dateFormat: new Date(date),
        },
      ]);
    }
  };
  const deleteDistanceItem = (date)=>{
    setDistanceList(prevDistanceList => prevDistanceList.filter(distanceList => distanceList.date !== date ))
    console.log(date + " delete")
  }

  return (
    <div className="container">
      <DistanceForm onAddList ={onAddList} />
      { distanceList.length > 0 ? (<DistanceList distanceList={distanceList} deleteDistanceItem={deleteDistanceItem} />):
      (<div className="empty-list"> Нет данных</div>)}
    </div>
  );
}

export default App;
