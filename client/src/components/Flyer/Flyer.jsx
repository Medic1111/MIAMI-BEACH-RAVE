import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import classes from "./Flyer.module.css";

const Flyer = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <main className={classes.main}>
      <button
        onClick={() => uiMgr.dispatch({ type: "BUYOPTIONS" })}
        className={classes.cta}
      >
        GET YOUR TICKET
      </button>
      <h1 className={classes.h1}>MIAMI BEACH RAVE</h1>
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
      <div className={classes.div}>
        <p className={classes.pBox}>
          <span className={classes.spanSec1}>DJ</span>
          <span className={classes.spanSec2}>Kailou</span>
        </p>
        <p className={classes.pBox}>
          <span className={classes.spanSec1}>DJ</span>
          <span className={classes.spanSec2}>Nuna</span>
        </p>
        <p className={classes.pBox}>
          <span className={classes.spanSec1}>DJ</span>
          <span className={classes.spanSec2}>Lamarte</span>
        </p>
      </div>
      <p className={classes.footer}>www.nonexistentevent.com</p>
    </main>
  );
};

export default Flyer;
