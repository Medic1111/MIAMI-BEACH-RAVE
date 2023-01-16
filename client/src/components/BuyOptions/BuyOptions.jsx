import classes from "./BuyOptions.module.css";
import Ticket from "../Ticket/Ticket";
import { tickets } from "../../assets/TicketData/TicketData";

const BuyOptions = ({ setTicketType }) => {
  return (
    <section className={classes.section}>
      <p className={classes.pTitle}>CHOOSE THE FUN</p>
      {tickets.map((obj, index) => {
        return (
          <Ticket
            setTicketType={setTicketType}
            key={`TICKET_${index}`}
            obj={obj}
          />
        );
      })}
      <h3 className={classes.disclaimer}>
        Must show Email or QR Code at the door with an ID. Prices at the door
        will be different. This is an online offer. Each pass admits ONE.
      </h3>
    </section>
  );
};

export default BuyOptions;
