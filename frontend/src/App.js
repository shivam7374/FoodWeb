import React from 'react';
import data from './data';
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