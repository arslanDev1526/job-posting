import React from 'react'
import SearchInput from '../maindata/searchinput'
import CardsChagerBtn from '../maindata/cardschagerbtn'

const Search = () => {
  return (
   <> 
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
  
   </>
  )
}

export default Search