import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => setTasks(data), []);

  function createTask(task) {
    task.id = tasks.length;
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
