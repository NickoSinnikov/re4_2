import React from 'react';

export default function DistanceForm(props) {
  const {onAddList} = props;
  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddList(event.target.date.value, event.target.distance.value);
    event.target.date.value = '';
    event.target.distance.value = '';
  }
  
  return (
    
      <form className="input-forms" onSubmit={onSubmitHandler}>
        <div className="form-date form">
          <label>Дата (ДД.ММ.ГГ)</label>
          <input type="date"  name='date' required/>
        </div>
        <div className="form-distance form">
          <label> Пройдено км</label>
          <input type="number" name='distance' required/>
        </div>
        <button type="submit" className="button">
          Ok
        </button>
      </form>
    
  );
}
