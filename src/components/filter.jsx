import React, { useState } from "react";

const Filter = ({filterHandler}) => {

  return (
    <>
      <div>
        <h1>
          <span> SHOW </span>RESULTS BY
        </h1>
        <div className="bg-slate-300 h-96">
          <div className="pl-5 py-16 flex flex-col gap-2">
            <label className="flex gap-2" htmlFor="Software">
              <input
                onChange={filterHandler}
                className="accent-green-600 w-4"
                type="checkbox"
                value="Software"
                id="Software"
              />
              <span>Software Development Department (6)</span>
            </label>

            <label className="flex gap-2" htmlFor="Design">
              <input
                onChange={filterHandler}
                className="accent-green-600 w-4"
                type="checkbox"
                value="Design"
                id="Design"
              />
              <span className="w-60">Design Department (3)</span>
            </label>

            <label className="flex gap-2" htmlFor="HR">
              <input
                onChange={filterHandler}
                className="accent-green-600 w-4"
                type="checkbox"
                value="HR"
                id="HR"
              />
              <span className="w-60">HR & Admin Department (2)</span>
            </label>

            <label className="flex gap-2" htmlFor="Business">
              <input
                onChange={filterHandler}
                className="accent-green-600 w-4"
                type="checkbox"
                value="Business"
                id="Business"
              />
              <span className="w-60">Business Development Department (0)</span>
            </label>

            <label className="flex gap-2" htmlFor="SQA">
              <input
                onChange={filterHandler}
                className="accent-green-600 w-4"
                type="checkbox"
                value="SQA"
                id="SQA"
              />
              <span className="w-60">SQA Department (1)</span>
            </label>

            <label className="flex gap-2" htmlFor="Marketing">
              <input
                onChange={filterHandler}
                className="accent-green-600 w-4"
                type="checkbox"
                value="Marketing"
                id="Marketing"
              />
              <span className="w-60">Marketing Department (3)</span>
            </label>

            <label className="flex gap-2" htmlFor="Sales">
              <input
                onChange={filterHandler}
                className="accent-green-600 w-4"
                type="checkbox"
                value="Sales"
                id="Sales"
              />
              <span className="w-60">Sales & Marketing (0)</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
