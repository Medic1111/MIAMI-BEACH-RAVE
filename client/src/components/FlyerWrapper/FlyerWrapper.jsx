import classes from "./FlyerWrapper.module.css";

const FlyerWrapper = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default FlyerWrapper;
