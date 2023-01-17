import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useVerify = (id) => {
  const [client, setClient] = useState({});
  const nav = useNavigate();

  const fetchClient = useCallback(async () => {
    if (!id) return nav("/");
    await axios
      .get(`/api/v1/client/${id}`)
      .then((serverRes) => setClient(serverRes.data.client))
      .catch((err) => {
        nav("/");
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    fetchClient();
  }, [id]);

  return client;
};

export default useVerify;
