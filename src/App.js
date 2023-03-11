import "./App.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";

function App() {
  return (
    <div className="mx-auto max-w-[1440px] bg-[#EEEEEE] dark:bg-black min-h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
