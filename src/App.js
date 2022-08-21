import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import styles from "./app.module.css"
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Routes , Route , Navigate} from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar/>
      <div className={styles.container}>
        <Sidebar/>


        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>

        
        <Routes>
          <Route  path="/user" element={<UserList/>} />
        </Routes>
       

        <Routes>
          <Route  path="/user/:userId" element={<User/>} />
        </Routes>

        <Routes>
          <Route path="/newUser" element={<NewUser/>} />
        </Routes>

        <Routes>
          <Route  path="/products" element={<ProductList/>} />
        </Routes>

        <Routes>
          <Route  path="/products/:productsId" element={<Product/>} />
        </Routes>

        <Routes>
          <Route  path="/newProduct" element={<NewProduct/>} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
