import classes from "./CheckoutWrapper.module.css";

const CheckoutWrapper = ({ children }) => {
  return <article className={classes.article}>{children}</article>;
};

export default CheckoutWrapper;
