import React from 'react'

const JobsDetail = ({info}) => {
  return (
    <> 
      <div className="w-full max-w-5xl px-5">
       
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="mb-3">Summary</h2>
              <p>{info.summary}</p>
            </div>
            <div className="">
              <h2 className="mb-3">Prerequisites</h2>
              <div>
                {info.prerequisites.map((prereq, index) => (
                  <li className="mb-1" key={index}>
                    {" "}
                    {prereq}{" "}
                  </li>
                ))}
              </div>
            </div>
            <div className="">
              <h2 className="mb-3">Required</h2>
              <div>
                {info.required.map((require, index) => (
                  <li className="mb-1" key={index}>
                    {require}
                  </li>
                ))}
              </div>
            </div>
            <div className="">
              <h2 className="mb-3">Skills</h2>
              <div>
                {info.skills.map((skill, index) => (
                  <li className="mb-1" key={index}>
                    {skill}
                  </li>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-3"> Responsibilities</h2>
              <div>
                {info.responsibilities.map((responsibility, index) => (
                  <li className="mb-1" key={index}>
                    {responsibility}
                  </li>
                ))}
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default JobsDetail