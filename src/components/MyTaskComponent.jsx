import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const MyTaskComponent = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 mt-2 p-3 text-white bg-green-700 rounded-md shadow-md">
        <h1 className="text-xl font-semibold mb-2">Task title</h1>
        <p className="text-sm text-gray-100">Task title here</p>

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
    </div>
  );
};
export default MyTaskComponent;