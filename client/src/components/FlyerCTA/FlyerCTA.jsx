import classes from "./FlyerCTA.module.css";
import { uiCtx } from "../../features/ui-ctx";
import { useContext } from "react";

const FlyerCTA = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <button
      onClick={() => uiMgr.dispatch({ type: "BUYOPTIONS" })}
      className={classes.cta}
    >
      GET YOUR TICKET
    </button>
  );
};

export default FlyerCTA;
