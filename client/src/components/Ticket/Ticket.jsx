import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import classes from "./Ticket.module.css";

const Ticket = ({ obj, setTicketType }) => {
  const uiMgr = useContext(uiCtx);
  return (
    <div
      onClick={() => {
        setTicketType(obj.ticket_type);
        uiMgr.dispatch({ type: "CHECKOUT" });
      }}
      className={classes.ticket}
    >
      <div className={classes.txtBox}>
        <h2 className={classes.h2}>{obj.title}</h2>
        <p className={classes.p}>
          Location: 1111 Ocean Dr., miami beach, fl, 33139
        </p>
        <p className={classes.p}>Gate open: 11pm</p>
      </div>
      <p className={classes.price}>${obj.price}</p>
    </div>
  );
};

export default Ticket;
