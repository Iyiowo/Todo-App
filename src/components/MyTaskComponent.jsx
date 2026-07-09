import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { getAllTasks } from "../services/taskService";
import toast from "react-hot-toast";

const MyTaskComponent = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {loading && <p className="text-gray-600">Loading tasks...</p>}

      {!loading && tasks.length === 0 && (
        <p className="text-gray-500">No tasks available.</p>
      )}

      {!loading &&
        tasks.map((task) => (
          <div key={task.id} className="flex flex-col gap-2 mt-2 p-3 text-white bg-green-700 rounded-md shadow-md">
            <h1 className="text-xl font-semibold mb-2">{task.title}</h1>
            <p className="text-sm text-gray-100">{task.description}</p>

            <div className="flex w-full justify-end items-center gap-4 mt-4">
              <button className="btn btn-primary text-white flex gap-1 px-3">
                <FaRegEdit className="text-base" />
                Edit
              </button>

              <button className="btn btn-error bg-red-600 text-white flex gap-1 px-3">
                <MdDeleteOutline className="text-lg" />
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default MyTaskComponent;