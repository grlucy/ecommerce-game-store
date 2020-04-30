import React from "react";
import { availableDays, availableHours } from "../../utils/pickupHelpers";
import "./style.css";

function PickupSelect(props) {

  const { pickup, onDateChange, onTimeChange } = props;

  const renderDays = () => {
    const days = availableDays();
    return (
      days.map((day, index) => {
        return (
          <option key={index}>{day.format("M/D/YYYY")}</option>
        );
      })  
    );
  }

  const renderTimes = () => {
    const times = availableHours(pickup);
    return (
      times.map((time, index) => {
        return (
          <option key={index}>{`${time.hours % 12 === 0 ? "12" : time.hours % 12}:${time.mins === 0 ? "00" : "30"} ${time.hours < 12 ? "am" : "pm"}`}</option>
        );
      })  
    );
  }

  return (
    <div>
      <div className="level pickup-label">
        <div className="level-left">
          <h3 className="level-item title is-5"><span id="pickup-icon" className="icon"><i className="fas fa-car"></i></span>Pickup Time:</h3>
        </div>
      </div>
      <div className="select date-select is-medium">
        <select value={pickup.format("M/D/YYYY")} onChange={onDateChange}>
          {renderDays()}
        </select>
      </div>
      <div className="select time-select is-medium">
        <select value={pickup.format("h:mm a")} onChange={onTimeChange}>
          {renderTimes()}
        </select>
      </div>
    </div>
  );
}

export default PickupSelect;
