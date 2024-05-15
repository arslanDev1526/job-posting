import { createContext, useState, useEffect } from "react";
import supabase from "../config/client.jsx";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([]);
  const[isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  async function fetchData() {
    const { data, error } = await supabase.from("job_data").select("*");
    if (error) {
      //add toast here to show
    } else {
    setCardsData(data);
    setIsLoading(false);

    }
  }

  return (
    <DataContext.Provider value={{ cardsData: cardsData, isLoading: isLoading }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
