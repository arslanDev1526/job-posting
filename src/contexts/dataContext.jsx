import { createContext, useState,useEffect } from "react";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://blnncmgalhqgaetzdtms.supabase.co'
const supabaseKey =" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbm5jbWdhbGhxZ2FldHpkdG1zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjQwNDIxOSwiZXhwIjoyMDI3OTgwMjE5fQ.OwcosZCrJxCYQaqE6L9eGdXsN4oZGK4xQYUE3-ragBA"
const supabase = createClient(supabaseUrl, supabaseKey)



const DataContext = createContext();

export const DataProvider = ({children}) => { 
    const[cardsData, setCardsData] = useState([]);


    useEffect(()=> { 
        fetchData();
    },[]);
    
    async function fetchData() { 
        const {data, error} = await supabase.from("job_data").select();
          if (error) {
            console.error('Error fetching todos:', error.message);
          } else {
            console.log(data,"cardsData");
          }
          setCardsData(data);
    
    }

    return ( 
        <DataContext.Provider value={cardsData}>
        {children}
      </DataContext.Provider>
    )

};

export default DataContext;
