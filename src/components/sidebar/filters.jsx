import React from 'react'

const Filters = () => {
  return (
    <> 
      <div className='mt-10'>
        <h1 className='text-2xl'>
          <span className='font-bold'> SHOW </span>RESULTS BY
        </h1>
        <div className="mt-12 bg-white shadow-md">
          <div className="pl-5 py-10 flex flex-col gap-2">
            <label className="flex gap-2" htmlFor="Software">
              <input
                // onChange={filterHandler}
                className="accent-green-600 w-3 shadow-sm"
                type="checkbox"
                value="Software"
                id="Software"
              />
              <span className='text-sm w-52'>Software Development Department (6)</span>
            </label>

            <label className="flex gap-2" htmlFor="Design">
              <input
                // onChange={filterHandler}
                className="accent-green-600 w-3"
                type="checkbox"
                value="Design"
                id="Design"
              />
              <span className="text-sm w-52">Design Department (3)</span>
            </label>

            <label className="flex gap-2" htmlFor="HR">
              <input
                // onChange={filterHandler}
                className="accent-green-600 w-3"
                type="checkbox"
                value="HR"
                id="HR"
              />
              <span className="text-sm w-52">HR & Admin Department (2)</span>
            </label>

            <label className="flex gap-2" htmlFor="Business">
              <input
                // onChange={filterHandler}
                className="accent-green-600 w-3"
                type="checkbox"
                value="Business"
                id="Business"
              />
              <span className="text-sm w-52">Business Development Department (0)</span>
            </label>

            <label className="flex gap-2" htmlFor="SQA">
              <input
                // onChange={filterHandler}
                className="accent-green-600 w-3"
                type="checkbox"
                value="SQA"
                id="SQA"
              />
              <span className="text-sm w-52">SQA Department (1)</span>
            </label>

            <label className="flex gap-2" htmlFor="Marketing">
              <input
                // onChange={filterHandler}
                className="accent-green-600 w-3"
                type="checkbox"
                value="Marketing"
                id="Marketing"
              />
              <span className="text-sm w-52">Marketing Department (3)</span>
            </label>

            <label className="flex gap-2" htmlFor="Sales">
              <input
                // onChange={filterHandler}
                className="accent-green-600 w-3"
                type="checkbox"
                value="Sales"
                id="Sales"
              />
              <span className="w-60">Sales & Marketing (0)</span>
            </label>
            <button className='underline text-blue-500 text-xs text-start'>Reset filters</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filters