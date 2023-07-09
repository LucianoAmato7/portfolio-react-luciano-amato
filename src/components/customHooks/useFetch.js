import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect((url) => {
    setLoading(true);

    fetch(url)
      .then((resp) => {
        resp.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(`Error en el fetch de datos: ${error}`);
        setError(error)
      })
      .finally(() => {
        console.log("Fetch a datos reslizado");
        setLoading(false);
      });
  }, []);

  return {data, loading, error};
};

export default useFetch;
