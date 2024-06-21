import { createContext, useState, useEffect } from "react";
import supabase from "../config/client.jsx";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cardsData, setCardsData] = useState([]);
  const[isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setCardsData((prevData) => prevData.filter((item) => item.id !== item.id))
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  // }, [handleDelete]);

  async function fetchData() {
    const { data, error } = await supabase.from("job_data").select("*").order("created_at",{ascending:false});
    if (error) {
      //add toast here to show
    } else {
    setCardsData(data);
    setIsLoading(false);

    }
  }

  // console.log(cardsData,"cardsData")
  // created_at

  return (
    <DataContext.Provider value={{ cardsData: cardsData, isLoading: isLoading , handleDelete: handleDelete }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
