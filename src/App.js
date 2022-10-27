import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    
    {
      path:'/',
      element:<Main></Main> ,

      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }
    



  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
 
    </div>
  );
}
export default App;
