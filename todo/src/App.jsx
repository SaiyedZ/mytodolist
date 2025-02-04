import { useState } from "react";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { task: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
    }}>
      <div style={{ 
        width: "90%", 
        maxWidth: "400px", 
        fontFamily: "Arial, sans-serif", 
        padding: "20px", 
        borderRadius: "15px", 
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", 
        backgroundColor: "#fff", 
      }}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ 
            width: "94%", 
            padding: "10px", 
            marginBottom: "10px", 
            border: "none", 
            borderRadius: "8px", 
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button 
          onClick={addTask} 
          style={{ 
            width: "100%", 
            padding: "10px", 
            backgroundColor: "#2196f3", 
            color: "white", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer", 
            fontSize: "16px", 
            fontWeight: "bold",
          }}>
          Add
        </button>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                marginBottom: "6px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(index)}
                style={{ marginRight: "10px" }}
              />
              <span onClick={() => toggleTask(index)} style={{ flex: 1, cursor: "pointer", fontSize: "16px" }}>{t.task}</span>
              <button 
                onClick={() => deleteTask(index)} 
                style={{ padding: "6px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "14px" }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
