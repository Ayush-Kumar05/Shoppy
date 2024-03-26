import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { useStateValue } from './StateProvider';
import './Basket.css';

const Basket = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="basket">
      <h2>Your Basket</h2>
      {basket?.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <>
          <div>
            {basket.map(item => (
              <div key={item.id} className="basket_item">
                <img src={item.image} alt={item.title} />
                <div className="basket_item_info">
                  <p className="basket_item_title">{item.title}</p>
                  <p className="basket_item_price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                  </p>
                  <p className="basket_item_rating">
                    {Array(item.rating)
                      .fill()
                      .map((_, index) => (
                        <span key={index}>⭐</span>
                      ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/checkout">
            <button className="checkout_button">Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Basket;
