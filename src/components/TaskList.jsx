import { taskData } from '../taskData';

const Task = ({ text }) => {
  return <>{text}</>;
};

const TaskList = () => {
  return (
    <section>
      <ul>
        {taskData.map(task => {
          return (
            <li key={task.id}>
              <Task text={task.text} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TaskList;
