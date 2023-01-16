import { useParams } from "react-router-dom";
import QRCode from "../../components/QRCode/QRCode";

const Success = () => {
  const id = useParams().id;
  return <QRCode url={id} />;
};

export default Success;
