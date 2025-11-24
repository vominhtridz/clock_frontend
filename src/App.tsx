
import ClockDisplay from './ClockDisplay';
import ReminderManager from './ReminderManager';
// Bạn vẫn cần file style.css và Font Awesome CSS được nhúng trong index.html hoặc tương đương

const App = () => {
  return (
    <div className="container">
      <ClockDisplay />
      <ReminderManager />
    </div>
  );
};

export default App;