
const AddTaskComponent = () => {
  return (
    <>
      <div className="flex flex-1/4 flex-col gap-2 bg-green-100 rounded-md p-4">
        <h1 className="texte-green-900 font-semibold text-lg">Add Your Task</h1>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            id="taskTitle"
            placeholder="Task Title..."
            className="p-3 w-full text-white rounded-md border-gray-100 bg-green-800 shadow-xs text-sm placeholder:text-gray-300"
          />

          <textarea
            id="taskDesc"
            cols={30}
            rows={12}
            className="p-3 rounded-md text-sm w-full text-white border-gray-100 bg-green-800 placeholder:text-gray-300 resize-none"
            placeholder="Write your task here..."
          ></textarea>

          <button
            type="submit"
            className="btn w-full px-4 py-2 text-sm text-white rounded-md bg-green-600 hover:bg-green-800 transition ease-in-out">
            Save
          </button>
        </form>
      </div>
    </>
  );
};
export default AddTaskComponent;