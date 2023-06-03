import React, { useContext, useEffect, useState } from "react";
import api from "../../api/api";

const KitsContext = React.createContext();

export const useKits = () => {
  return useContext(KitsContext);
};

const KitsProvider = ({ children }) => {
  const [kits, setKits] = useState([]);
  const [works, setWorks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      api.fetchAll("kits").then((data) => setKits(data));
      api.fetchAll("works").then((data) => setWorks(data));
    } catch (error) {
      errorCatcher(error);
    }
  }, []);

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
    setLoading(false);
  }
  return (
    <KitsContext.Provider value={{ kits, works, error }}>
      {isLoading ? children : "Loading..."}
    </KitsContext.Provider>
  );
};

export default KitsProvider;
