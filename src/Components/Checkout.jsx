import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { apiDomain } from "../utils/utils";
import { CartContext } from "../context/CartContext/Context";
import { useContext } from "react";
import CheckoutForm from "./CheckoutForm";

import "./Checkout.css";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51NM8u2LGQyKikAGGD0WYndHP2FL57elqLC8m0CoM1mcb6unFqKQHQoYmw4LTLLco1rwKuiu4yyeaXTskABg8fB5K00ZiUtGlwS");

export default function Checkout() {
  const {cartId} = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${apiDomain}/create-payment-intent/${cartId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "books" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));

  }, []);

  const appearance = {
    theme: 'night',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="CheckoutForm">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}