import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [dragIdx, setDragIdx] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { text, dueDate }]);
      setText('');
      setDueDate('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleDragStart = (index) => setDragIdx(index);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (index) => {
    const newTasks = [...tasks];
    const [dragged] = newTasks.splice(dragIdx, 1);
    newTasks.splice(index, 0, dragged);
    setTasks(newTasks);
  };

  return (
    <div id="app">
      <h1>📝 To-Do List</h1>
      <input
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}
              draggable
              onDragStart={() => handleDragStart(i)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(i)}>
            <span>{task.text}</span>
            {task.dueDate && (
              <div className="due">📅 {task.dueDate}</div>
            )}
            <button onClick={() => removeTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
