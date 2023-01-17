import classes from "./CheckoutTotal.module.css";

const CheckoutTotal = ({ ticketType }) => {
  return (
    <p className={classes.total}>
      {ticketType} PASS - ${ticketType === "DAY" ? "220" : "1000"}
    </p>
  );
};

export default CheckoutTotal;
