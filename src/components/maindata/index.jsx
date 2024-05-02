import React from "react";
import CardListing from "./cardlisting";
import CardsChagerBtn from "./cardschagerbtn";
import SearchInput from "./searchinput";

const Index = () => {
  return (
    <>
      <div>
      <div className='flex justify-between py-10 '> 
   <div> 
   <h1 className='text-2xl'> 
       <span className='font-bold'>ALL  </span>POSITIONS
    </h1>
   </div>
   <div className='flex gap-4'> 
   <CardsChagerBtn/>
   <SearchInput/>
   </div>
   </div>
        <CardListing />
      </div>
    </>
  );
};

export default Index;
