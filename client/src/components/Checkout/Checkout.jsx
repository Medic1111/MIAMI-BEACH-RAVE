import React from "react";
import CheckoutWrapper from "../CheckoutWrapper/CheckoutWrapper";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = ({ ticketType }) => {
  return (
    <CheckoutWrapper>
      <CheckoutForm ticketType={ticketType} />
    </CheckoutWrapper>
  );
};

export default Checkout;
