import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  return <div>
    {/* <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div> */}
    <br></br><br></br>
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div className="details">
            <div  id="main" className="container">
            <img id="product-img" src={product.image}></img>
            <div id="description" className="ml-0 mt-5">
                <h2 id="product_name" className="ml-0">{product.name} </h2>
                <p  className="ml-0 mb-0 mt-1">by Amul</p>
                <div id="icons" className="mt-0 mb-0">
                <i className="fa fa-star " ></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                
                <p className="d-inline ml-0 text-primary">23,000+ rating </p>
                </div>
                <p id="price" className="ml-0">M.R.P: Rs:{product.price}</p>
                <hr className="mt-0"></hr>
                <div id="service">
                {/* <div>
                <i className="fa fa-truck fa-2x  "></i>
                <i className="fas fa-pump-soap fa-2x"></i>
                <i className="fa fa-retweet fa-2x  "></i>
               </div> */}
                <div>
                <p>Fast delievery</p>
                <p>Fresh Food</p>
                <p>No return</p>
               </div>
                </div>
                <hr className="mt-0"></hr>
                <div id="order-details" className="font-rale d-flex flex-column text-dark">
                    <small>Delivery under 30 min</small>
                    <small>Sold by <a href="#">FoodWeb </a>(4.5 out of 5 | 18,198 ratings)</small>
                    <small><i className="fas fa-map-marker-alt color-primary"></i>&nbsp;&nbsp;Deliver to Customer - 110078</small>
                </div>
                <hr></hr>
                <label for="QUANTITY">QUANTITY: </label>
                <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                </select>
                <hr></hr>
                Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                <hr></hr>
                <button id="add-to-cart" onClick={handleAddToCart} className="btn btn-warning my-2">ADD TO CART</button>
                {/* &nbsp;&nbsp;
                <button id="buy-now" className="btn btn-danger my-2">BUY NOW</button> */}
            </div>
            </div>
            <br></br>
            <br></br>
            <div id="product_info">
            <h2>{product.name}</h2>
            <hr></hr>
            <h3><u>About</u></h3>
            <p>{product.description}</p>
            <hr></hr>
            {/* <h3>Other Product info:</h3>
            <p>
                EAN Code: 242671 
                Country Of Origin: India 
                Manufacturer Name & Address : Karnataka Co-Operative Milk Producer's Federation Limited 
                Best before __PSL__days from the date of delivery 
                For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address: Innovative Retail Concepts Private Limited, Ranka Junction 4th Floor, Tin Factory bus stop. KR Puram, Bangalore - 560016 Email:customerservice@supermarket.com</p> */}
            </div>
          </div>
          
        )
    }


  </div>
}
export default ProductScreen;