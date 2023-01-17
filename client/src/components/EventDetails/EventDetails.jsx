import classes from "./EventDetails.module.css";

const EventDetails = () => {
  return (
    <div className={classes.div}>
      <p className={classes.pBox}>
        <span className={classes.span1}>5</span>
        <span className={classes.span2}>DAYS</span>
      </p>
      <span className={classes.dash}>-</span>
      <p className={classes.pBox}>
        <span className={classes.span1}>11</span>
        <span className={classes.span2}>FEB</span>
      </p>
      <span className={classes.dash}>-</span>
      <p className={classes.pBox}>
        <span className={classes.span1}>3</span>
        <span className={classes.span2}>ZONES</span>
      </p>
    </div>
  );
};

export default EventDetails;
