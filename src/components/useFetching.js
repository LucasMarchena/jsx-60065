import { useEffect, useState } from "react";

export const useFetching = (endpoint) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState({});

  useEffect(() => {
    const getData = fetch(endpoint);
    getData
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setErr(err));
  }, [endpoint]);
  return { data, err };
};
