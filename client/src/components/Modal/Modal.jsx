import { useContext, useState } from "react";
import { uiCtx } from "../../features/ui-ctx";
import Portal from "../../portal/Portal";
import BuyOptions from "../BuyOptions/BuyOptions";
import Checkout from "../Checkout/Checkout";

const Modal = () => {
  const uiMgr = useContext(uiCtx);
  const [ticketType, setTicketType] = useState("");
  return (
    <Portal>
      {uiMgr.state.showBuyingOptions && (
        <BuyOptions setTicketType={setTicketType} />
      )}
      {uiMgr.state.showCheckout && <Checkout ticketType={ticketType} />}
    </Portal>
  );
};
export default Modal;
