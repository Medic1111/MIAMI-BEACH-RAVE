import classes from "./QRCode.module.css";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import useVerify from "../../hooks/useVerify";
const QRCode = ({ url }) => {
  const nav = useNavigate();

  useVerify(url);

  const printHandler = () => {
    window.print();
  };

  const codeTag = (
    <QRCodeCanvas
      id="qrCode"
      size={175}
      bgColor={"#f7f7f7"}
      level={"H"}
      value={`https://miamibeachrave.onrender.com/verify/${url}`}
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
