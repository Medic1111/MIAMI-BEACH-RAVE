import classes from "./BuyOptWrapper.module.css";

const BuyOptWrapper = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default BuyOptWrapper;
