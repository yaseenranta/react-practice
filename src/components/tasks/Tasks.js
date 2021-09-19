import { TaskItem } from "./TaskItem";

export const Tasks = ({ tasks, deleteTask, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} onToggle={onToggle}></TaskItem>
      ))}
    </>
  );
};
