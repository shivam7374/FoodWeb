import React from 'react';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
// import SigninScreen from './screens/SigninScreen';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            FooWeb
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
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
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">₹{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer class=" bg-dark">
           <div class="row bg-dark">
             <div class="col-md-4 ml-5 text-light my-3">
               <h2 >SUPERMART</h2>
               <a href="https://www.facebook.com/" ><img className="logo" src="../images/facebook-logo.png" height="40"  alt="FoodWeb"/></a>
               <a href="https://www.instagram.com/"><img className="logo" src="../images/instagram-logo.png" height="40"  alt="FoodWeb"/></a>
               <a href="https://www.twitter.com/" ><img className="logo" src="../images/twitter-logo.webp" height="40" margin="5px" alt="FoodWeb"/></a>
               </div>
                  <div class="col-md-3 mx-3 my-3">
                   <h3 class="text-light" >Information</h3>
                   
                   <a href="#" class="d-block">About us</a>
                   <a href="#" class="d-block">Branches</a>
                   <a href="#" class="d-block">Terms and conditions</a>
                   <a href="#" class="d-block">Privacy Policy</a>
                
            </div>
            <div class="col-md-3 mx-3 my-3">
                <h3 class="text-light" >Account</h3>
                
                <a href="#" class="d-block">My Account</a>
                <a href="#" class="d-block">History</a>
                <a href="#" class="d-block">My wishlist</a>
                <a href="#" class="d-block">Help</a>
             
         </div>
            
        </div>
       </footer>
  
  
    </div>
  );
}

export default App;