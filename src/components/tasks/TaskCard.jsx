import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../Redux/tasks/taskSlice';

const TaskCard = ({task}) => {
 const dispatch = useDispatch();

 let updatedStatus;

 if(task.status == 'pending'){
  updatedStatus = 'running'
 }else if(task.status == 'running'){
  updatedStatus = 'done'
 }else{
  updatedStatus = 'archived'
 }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3`}
      >
        {task?.Title}
      </h1>
      <p className="mb-3">{task?.Description}</p>
      <p className="text-sm">Assigned to - {task?.Assign}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus( {id : task.id, status: updatedStatus} ))
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
