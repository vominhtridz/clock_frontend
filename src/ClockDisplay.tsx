import React, { useState, useEffect } from 'react';

// Hàm định dạng ngày giờ (cho mục đích demo)
const formatTime = (date:any) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return { time: `${hours}:${minutes}`, seconds: seconds };
};

const formatDate = (date:any) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('vi-VN', options);
  // Cắt bỏ phần thứ/ngày trong chuỗi để hiển thị riêng
  const dayOfWeek = formattedDate.split(',')[0]; 
  const fullDate = formattedDate.substring(formattedDate.indexOf(',') + 1).trim();
  return { dayOfWeek: dayOfWeek, fullDate: fullDate };
};

const ClockDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Thiết lập interval để cập nhật thời gian
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // Dọn dẹp khi component unmount
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setCurrentDate(new Date());
  };

  const timeData = formatTime(currentDate);
  const dateData = formatDate(currentDate);

  return (
    <header className="clock-display-area">
      <div id="date-time-display" className="date-time-box">
        <span className="day-of-week">{dateData.dayOfWeek},</span>
        <span className="full-date">{dateData.fullDate}</span>
      </div>
      
      <div id="time-display" className="time-box">
        <span className="hour-min">{timeData.time}</span>
        <span className="seconds">{timeData.seconds}</span>
      </div>
    </header>
  );
};

export default ClockDisplay;