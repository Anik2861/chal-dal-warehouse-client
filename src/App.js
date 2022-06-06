import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/HomePages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Navbar from './Pages/SharedPages/Navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Registration from './Pages/Authentication/Registration/Registration';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import AddItem from './Pages/Management/AddItem/AddItem';
import ManageInventory from './Pages/Management/ManageInventory/ManageInventory';
import MyItems from './Pages/Management/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/SharedPages/Footer/Footer';
import All_Items from './Pages/All-Items/All-Items';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/all-items" element={
          <PrivateRoute>
            <All_Items></All_Items>
          </PrivateRoute>
        }></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/inventory/:id" element={
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>}>
        </Route>
        <Route path="add-item" element={<PrivateRoute>
          <AddItem></AddItem>
        </PrivateRoute>}>
        </Route>
        <Route path="manage-inventories" element={<PrivateRoute>
          <ManageInventory></ManageInventory>
        </PrivateRoute>}>
        </Route>
        <Route path="my-items" element={<PrivateRoute>
          <MyItems></MyItems>
        </PrivateRoute>}>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
