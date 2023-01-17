import classes from "./Verify.module.css";
import { useParams } from "react-router-dom";
import useVerify from "../../hooks/useVerify";

const Verify = () => {
  const id = useParams().id;
  const client = useVerify(id);

  return (
    <div className={classes.div}>
      <h1
        className={
          client.ticket_type === "DAY"
            ? classes.ticketType
            : classes.ticketType2
        }
      >
        {client.ticket_type}
      </h1>
      <p className={classes.h1}>Welcome {client.name}</p>
      <p className={classes.payStatus}>
        {client.approved === true ? " approved" : " pending"}
      </p>
      <p className={classes.allowance}>Visits left: {client.allowance}</p>
    </div>
  );
};

export default Verify;
