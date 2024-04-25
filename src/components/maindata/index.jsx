import React from 'react'
import CardListing from './cardlisting'
import Filters from './filters'
import Search from '../search/search'

const Index = () => {
  return (
   <> 
   <div className='flex bg-gray-100 px-12 gap-4'> 
   <Filters/>
   <div> 
   <Search/>
   <CardListing/>
   </div>

   </div>
  
   </>
  )
}

export default Index