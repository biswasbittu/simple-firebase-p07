import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayOut from "./components/Layout/MainLayOut";


const App = () => {
const router= createBrowserRouter([
  {
    path:"/",
    element:<MainLayOut/>
  }
])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;