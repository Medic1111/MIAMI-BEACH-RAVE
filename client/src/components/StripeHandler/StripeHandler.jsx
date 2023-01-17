import classes from "./StripeHandler.module.css";
import axios from "axios";

const StripeHandler = ({ email, name, ticket_type }) => {
  const submitToStripeHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/v1/create_checkout_session", {
        email,
        name,
        ticket_type,
      })
      .then((serverRes) => {
        window.location.href = serverRes.data.url;
      })
      .catch((err) => console.log(err));
  };
  return (
    <button
      type="submit"
      onClick={submitToStripeHandler}
      className={classes.cta}
    >
      GET YOUR TICKET
    </button>
  );
};

export default StripeHandler;
