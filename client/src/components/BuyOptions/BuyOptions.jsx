import TicketList from "../TicketList/TicketList";
import Disclaimer from "../Disclaimer/Disclaimer";
import BuyOptWrapper from "../BuyOptWrapper/BuyOptWrapper";
import BuyOptHeader from "../BuyOptHeader/BuyOptHeader";

const BuyOptions = ({ setTicketType }) => {
  return (
    <BuyOptWrapper>
      <BuyOptHeader />
      <TicketList setTicketType={setTicketType} />
      <Disclaimer />
    </BuyOptWrapper>
  );
};

export default BuyOptions;
