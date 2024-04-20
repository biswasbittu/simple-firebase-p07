import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayOut from "./components/Layout/MainLayOut";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


const App = () => {
const router= createBrowserRouter([
  {
    path:"/",
    element:<MainLayOut/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  }
])


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;