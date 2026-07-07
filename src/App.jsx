import { AddTaskComponent } from "./components/AddTaskComponent";
import { MyTaskComponent } from "./components/MyTaskComponent";
import { NavbarComponent } from "./components/NavbarComponent";

function App() {
  return (
    <div className="h-full">
      {/* navbar */}
      <NavbarComponent />

      {/* task container */}
      <div className="flex w-full h-full gap-8 py-6 px-6">
        {/* add task components */}
        <AddTaskComponent />

        {/* my task component */}
        <div className="flex flex-col gap-3 flex-3/4 bg-green-100 rounded-md p-4">
          <h1 className="text-green-900 font-semibold text-lg">My Tasks</h1>
          <MyTaskComponent />
          <div>My Task Component</div>
        </div>
      </div>
    </div>
  );
}
export default App;