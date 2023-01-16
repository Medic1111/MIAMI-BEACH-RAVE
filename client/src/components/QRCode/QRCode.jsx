import classes from "./QRCode.module.css";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";

const QRCode = ({ url }) => {
  const nav = useNavigate();
  const printHandler = () => {
    window.print();
  };

  const codeTag = (
    <QRCodeCanvas
      id="qrCode"
      size={175}
      bgColor={"#f7f7f7"}
      level={"H"}
      // value={`https://food-qr.herokuapp.com/restaurants/${url}`}
      value={`http://localhost:3000/verify/${url}`}
    />
  );

  return (
    <div className={classes.div}>
      <p className={classes.p}>Your QR Code is ready.</p>
      {codeTag}
      <button onClick={printHandler} className={classes.btn}>
        Print
      </button>
      <button onClick={() => nav("/")} className={classes.btn}>
        Got it
      </button>
    </div>
  );
};

export default QRCode;
