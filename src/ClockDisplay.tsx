import { useState, useEffect } from 'react';

// 1. Định nghĩa kiểu dữ liệu rõ ràng thay vì dùng 'any'
const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return { time: `${hours}:${minutes}`, seconds: seconds };
};

const formatDate = (date: Date) => {
  // 2. Khai báo kiểu cho options để đúng chuẩn TypeScript
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const formattedDate = date.toLocaleDateString('vi-VN', options);
  
  // Xử lý an toàn hơn trong trường hợp chuỗi không có dấu phẩy
  const splitIndex = formattedDate.indexOf(',');
  let dayOfWeek = '';
  let fullDate = formattedDate;

  if (splitIndex !== -1) {
    dayOfWeek = formattedDate.substring(0, splitIndex);
    fullDate = formattedDate.substring(splitIndex + 1).trim();
  } else {
    // Fallback nếu trình duyệt trả về format khác
    dayOfWeek = formattedDate.split(' ')[0]; 
  }

  return { dayOfWeek, fullDate };
};

const ClockDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // 3. Định nghĩa logic tick ngay tại nơi sử dụng để tránh lỗi hoisting (khai báo sau khi dùng)
    const tick = () => {
      setCurrentDate(new Date());
    };

    const timerID = setInterval(tick, 1000);

    // Dọn dẹp khi component unmount
    return () => clearInterval(timerID);
  }, []);

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