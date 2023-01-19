import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((data) => setData(data.data));
  }, []);

  return { data };
}

export default useFetch;
