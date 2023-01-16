import React from "react";
import { useContext } from "react";
import { uiCtx } from "../../features/ui-ctx";
import Flyer from "../../components/Flyer/Flyer";
import Modal from "../../components/Modal/Modal";

const Main = () => {
  const uiMgr = useContext(uiCtx);

  return (
    <React.Fragment>
      <Flyer />
      {uiMgr.state.showModal && <Modal />}
    </React.Fragment>
  );
};

export default Main;
