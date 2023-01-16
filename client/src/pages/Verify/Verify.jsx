import classes from "./Verify.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Verify = () => {
  const id = useParams().id;
  const nav = useNavigate();
  const [client, setClient] = useState({});

  const fetchClient = async () => {
    if (!id) return nav("/");
    await axios
      .get(`/api/v1/client/${id}`)
      .then((serverRes) => setClient(serverRes.data.client))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchClient();
  }, [id]);

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
