import { useContext, useState } from "react";
import { uiCtx } from "../../features/ui-ctx";
import classes from "./Checkout.module.css";
import axios from "axios";
import React from "react";

const Checkout = ({ ticketType }) => {
  const uiMgr = useContext(uiCtx);
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

  const stripeHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/v1/create_checkout_session", {
        email: formData.email,
        name: formData.name,
        ticket_type: ticketType,
      })
      .then((serverRes) => {
        window.location.href = serverRes.data.url;
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className={classes.article}>
      <form className={classes.form}>
        <p
          onClick={() => uiMgr.dispatch({ type: "CLOSE" })}
          className={classes.x}
        >
          x
        </p>
        <p className={classes.total}>Day pass- Total:$200</p>
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
        <button type="submit" onClick={stripeHandler} className={classes.cta}>
          GET YOUR TICKET
        </button>
      </form>
    </article>
  );
};

export default Checkout;
