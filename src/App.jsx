import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTaskList = [...taskList];
    newTaskList.push(newTask);
    setTaskList(newTaskList);

    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDel = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <>
      <header className="header__container">
        <div className="header__content">
          <h1 className="header__h1">Task list</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={newTask}
              placeholder="description"
            />
            <button type="submit" className="form__add">
              Add
            </button>
          </form>
        </div>
      </header>
      <main className="list__task">
        {taskList.map((task, index) => (
          <section className="task" key={index}>
            {task}
            <button className="task__del" onClick={() => handleDel(index)}>
              ❌
            </button>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
