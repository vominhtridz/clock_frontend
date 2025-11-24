import { useState } from 'react';

// 1. Định nghĩa kiểu dữ liệu cho một Lời nhắc (Interface)
interface Reminder {
  id: number;
  text: string;
  completed: boolean;
}

// Dữ liệu mẫu (State ban đầu)
const initialReminders: Reminder[] = [
  { id: 1, text: 'Ví dụ: Mua sữa lúc 18:00', completed: false },
  { id: 2, text: 'Ví dụ: Họp lúc 16:00', completed: true },
];

const ReminderManager = () => {
  // 2. Gán kiểu Reminder[] cho useState để TypeScript hiểu đây là danh sách Reminder
  const [reminders, setReminders] = useState<Reminder[]>(initialReminders);

  // Hàm xử lý khi nhấn nút Thêm
  const handleAdd = () => {
    // Tìm ID lớn nhất hiện tại + 1 để tạo ID mới (tránh trùng)
    const newId = reminders.length > 0 ? Math.max(...reminders.map(r => r.id)) + 1 : 1;
    
    const newReminder: Reminder = { 
      id: newId, 
      text: `Lời nhắc mới ${newId}`, 
      completed: false 
    };

    setReminders([...reminders, newReminder]);
  };
  
  // 3. SỬA QUAN TRỌNG: Thay 'id: any' thành 'id: number'
  const handleToggleComplete = (id: number) => {
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
        {/* Các nút Sửa và Xóa cần thêm logic để hoạt động, hiện tại để demo */}
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
            onClick={() => handleToggleComplete(item.id)} // id ở đây đã được hiểu là number
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