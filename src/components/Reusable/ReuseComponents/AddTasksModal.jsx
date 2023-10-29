import { useForm } from "react-hook-form";
import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../../Redux/tasks/taskSlice";


const AddTasksModal = ({isOpen, setIsOpen}) => {
    const dispatch = useDispatch();
const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(addTask(data))
    console.log(data);
    onCancel()
};
  

  const onCancel = ()=>{
    reset();
    setIsOpen(false)
  }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='Assign Task'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="title">Title</label>
                    <input className="rounded-md" type="text" placeholder="Title" {...register("Title", {})} />
                    <label htmlFor="description">Description</label>
                    <textarea className="rounded-md" {...register("Description", {})} />
                    <label htmlFor="deadline">Deadline</label>
                    <input className="rounded-md" type="date" placeholder="Deadline" {...register("Deadline", {})} />
                    <label htmlFor="assign">Assign to</label>
                    <select className="rounded-md" {...register("Assign")}>
                        <option value="Habib">Habib</option>
                        <option value=" Sakib"> Sakib</option>
                        <option value=" Era"> Era</option>
                        <option value=" Israt"> Israt</option>
                        <option value=" Sajib"> Sajib</option>
                    </select>
                    <label htmlFor="priority">Priority</label>
                    <select className="rounded-md" {...register("Priority")}>
                        <option value="High">High</option>
                        <option value=" Low"> Low</option>
                        <option value=" Medium "> Medium </option>
                    </select>

                    <div className="flex justify-end gap-3">
                    <button className="btn bg-red-400 " onClick={()=>onCancel()}>Cancel</button>
                    <input className="btn bg-blue-500 text-center text-white" type="submit" />
                    </div>
                    
                </div>
                
            </form>
        </Modal>
    );
};

export default AddTasksModal;