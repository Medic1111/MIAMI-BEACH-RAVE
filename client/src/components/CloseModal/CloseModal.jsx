import classes from "./CloseModal.module.css";
import { uiCtx } from "../../features/ui-ctx";
import { useContext } from "react";

const CloseModal = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <p onClick={() => uiMgr.dispatch({ type: "CLOSE" })} className={classes.x}>
      x
    </p>
  );
};

export default CloseModal;
