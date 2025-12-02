import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://skillswap-server-beta.vercel.app/latest-skills")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const dataInfo = {
    data,
    loading,
  };
  return <DataContext value={dataInfo}>{children}</DataContext>;
};

export default DataProvider;
