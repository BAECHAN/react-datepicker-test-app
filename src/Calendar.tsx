import React, { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "./styles.css";

export const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="calendar-container">
      {startDate && endDate && (
        <div className="selected-range">
          {format(startDate, "M월 d일")} → {format(endDate, "M월 d일")}
        </div>
      )}
      <DatePicker
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates as [Date, Date];
          setStartDate(start);
          setEndDate(end);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <button className="select-button">선택</button>
    </div>
  );
};
