import React from "react";
import { tickets } from "../../assets/TicketData/TicketData";
import TicketItem from "../TicketItem/TicketItem";
const TicketList = ({ setTicketType }) => {
  return (
    <React.Fragment>
      {tickets.map((obj, index) => {
        return (
          <TicketItem
            setTicketType={setTicketType}
            key={`TICKET_${index}`}
            obj={obj}
          />
        );
      })}
    </React.Fragment>
  );
};

export default TicketList;
