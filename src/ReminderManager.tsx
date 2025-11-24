import React, { useState } from 'react';

// Dữ liệu mẫu (State ban đầu)
const initialReminders = [
  { id: 1, text: 'Ví dụ: Mua sữa lúc 18:00', completed: false },
  { id: 2, text: 'Ví dụ: Họp lúc 16:00', completed: true },
];

const ReminderManager = () => {
  const [reminders, setReminders] = useState(initialReminders);

  // Hàm xử lý khi nhấn nút Thêm (Chỉ là ví dụ)
  const handleAdd = () => {
    const newId = Math.max(...reminders.map(r => r.id), 0) + 1;
    setReminders([...reminders, { id: newId, text: `Lời nhắc mới ${newId}`, completed: false }]);
  };
  
  // Hàm xử lý đánh dấu hoàn thành/chưa hoàn thành
  const handleToggleComplete = (id:any) => {
    setReminders(reminders.map(reminder => 
      reminder.id === id ? { ...reminder, completed: !reminder.completed } : reminder
    ));
  };

  return (
    <main className="management-area">
      <h2>Danh sách Lời nhắc/Báo thức</h2>
      
      {/* CRUD Controls */}
      <div className="crud-controls">
        <button id="add-btn" className="crud-button add-btn" onClick={handleAdd}>
          <i className="fas fa-plus"></i> Thêm mới
        </button>
        {/* Các nút Sửa và Xóa cần thêm logic để hoạt động */}
        <button id="edit-btn" className="crud-button edit-btn">
          <i className="fas fa-edit"></i> Sửa mục
        </button>
        <button id="delete-btn" className="crud-button delete-btn">
          <i className="fas fa-trash-alt"></i> Xóa mục
        </button>
      </div>
      
      {/* List Display */}
      <ul id="item-list" className="item-list-container">
        {reminders.map(item => (
          <li 
            key={item.id} 
            className={`item ${item.completed ? 'completed' : ''}`}
            onClick={() => handleToggleComplete(item.id)} // Ví dụ: Nhấp để hoàn thành
          >
            <span className="item-text">{item.text}</span>
            <i className={`fas fa-check-circle check-icon`}></i>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ReminderManager;