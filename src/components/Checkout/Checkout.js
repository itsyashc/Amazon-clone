import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          //   src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sept_22/Jupiter_22/Headers/GW-editorial_1150x323._CB611152745_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/Jupiter/Pc_Affordability-Stripe_1500x100.jpg"
          alt="ad"
        />
        <div>
          <h2 className="checkout__title">
            {user && <h3>Hello, {user?.email}</h3>}
            Your Shopping Basket
          </h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              price={item.price}
              rating={item.rating}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
