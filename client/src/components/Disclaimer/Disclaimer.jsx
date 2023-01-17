import classes from "./Disclaimer.module.css";

const Disclaimer = () => {
  return (
    <h3 className={classes.disclaimer}>
      Must show Email or QR Code at the door with an ID. Prices at the door will
      be different. This is an online offer. Each pass admits ONE.
    </h3>
  );
};

export default Disclaimer;
