import classes from "./CheckoutForm.module.css";
import CloseModal from "../CloseModal/CloseModal";
import CheckoutTotal from "../CheckoutTotal/CheckoutTotal";
import StripeHandler from "../StripeHandler/StripeHandler";
import { useState } from "react";

const CheckoutForm = ({ ticketType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const formDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form className={classes.form}>
      <CloseModal />
      <CheckoutTotal ticketType={ticketType} />
      <input
        className={classes.input}
        id="name"
        name="name"
        value={formData.name}
        onChange={formDataChangeHandler}
        placeholder="Name must match ID presented at gate"
        type={"text"}
        min={6}
        max={90}
        required
      />
      <input
        className={classes.input}
        id="email"
        name="email"
        value={formData.email}
        onChange={formDataChangeHandler}
        placeholder="Email address"
        type={"email"}
        min={6}
        max={90}
        required
      />
      <StripeHandler
        email={formData.email}
        name={formData.name}
        ticket_type={ticketType}
      />
    </form>
  );
};

export default CheckoutForm;
