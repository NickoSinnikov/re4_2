import React from 'react';

export default function EntryDistance() {
  return (
    <div>
      <form className="input-forms">
        <div className="form-date form">
          <label>Дата (ДД.ММ.ГГ)</label>
          <input type="date" placeholder="Дата" />
        </div>
        <div className="form-distance form">
          <label> Пройдено км</label>
          <input type="number" />
        </div>
        <button type="submit" className="button">
          Ok
        </button>
      </form>
    </div>
  );
}
