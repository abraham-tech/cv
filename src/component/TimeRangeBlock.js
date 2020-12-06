import React from "react";

const showYear = date =>
  date
    .getFullYear()
    .toString()
    .substr(2, 4);

const TimeRangeBlock = ({ title, children, startDate, endDate }) => {
  const startStr = showYear(startDate);
  const endStr = showYear(endDate);

  return (
    <div className="time-range-block">
      <div className="time-range-block__col1 time-range-block__time">
        {startStr}-{endStr}
      </div>
      <div className="time-range-block__col2">
        <h3 className="time-range-block__title">{title}</h3>
        <div className="time-range-block__content">{children}</div>
      </div>
    </div>
  );
};

export default TimeRangeBlock;
