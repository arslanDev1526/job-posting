import { createContext, useState, useEffect } from "react";
import supabase from "../config/client.jsx";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase.from("job_data").select("*");
    if (error) {
      console.error("Error fetching todos:", error.message);
    } else {
    }
    setCardsData(data);
  }

  return (
    <DataContext.Provider value={cardsData}>{children}</DataContext.Provider>
  );
};

export default DataContext;
