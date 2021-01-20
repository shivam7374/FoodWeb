import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/" ><img className="FoodWeb" src="../images/FoodWeb2.png" height="70" alt="FoodWeb"/></Link>
          </div>
          <div className="brand">
            <button className="lines" onClick={openMenu}>
              &#9776;
            </button>
          </div>
          <div className="header-links">
            <a href="cart/cart.html">Cart</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
                
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <center><h3 className="SC"><br/>Shopping Categories<br/><br/></h3></center>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <br/><br/>
          <div className="DivC"><Link to="/category/pizza" className="textc">Pizza</Link></div>
          <div className="DivC"><Link to="/category/indian" className="textc">Indian</Link></div>
          <div className="DivC"><Link to="/category/burger" className="textc">Burger</Link></div>
          <div className="DivC"><Link to="/category/dessert" className="textc">Desserts</Link></div>
          {/* <ul className="categories">
            <li>
            <Link to="/category/pizza">Pizza</Link>
            </li>

            <li>
              <Link to="/category/indian">Indian</Link>
            </li>

            <li>
              <Link to="/category/burger">Burger</Link>
            </li>

            <li>
              <Link to="/category/dessert">Desserts</Link>
            </li>

          </ul> */}
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />


          </div>

        </main>
        <footer className="footer">
          All right reserved.
          © Copyright 2021 Design by Team ThunderBolt
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
