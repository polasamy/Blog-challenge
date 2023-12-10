import './App.css'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout.jsx'
import BlogDetails from './Components/BlogDetails/BlogDetails.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Login from './Components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,errorElement:<ErrorPage/>,children:[
      {index: true, element: <Home /> },
      {path:'details',element:<BlogDetails/>},
      {path:'login',element:<Login/>},

    ]
  }
]);
function App() {

  return <RouterProvider router={router} />
   
  
}

export default App
