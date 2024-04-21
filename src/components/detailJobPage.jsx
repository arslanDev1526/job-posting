import React from "react";
import { useParams,useLocation } from "react-router-dom";
import HeaderImg from "../assets/images/webpack.png";
import Logo from "../assets/images/logoo.png";

const DetailJobPage = () => {
  const {id} = useParams();
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <>
      <div
        className="w-full h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeaderImg})` }}
      >
        <div className="flex justify-center items-center flex-col">
          <div>
            <img src={Logo} alt="" />
          </div>
          <h1 className="text-white text-5xl">PixelPulse</h1>
        </div>
      </div>
      <div className="px-5">
        <div className="py-8 flex justify-between border-b-[1px] grey-green-500">
          <div className="">
            <h1 className="text-blue-700 text-3xl font-semibold">
              {item.post_name}
            </h1>
            <div className="flex gap-2 mt-1">
              <p>{item.department}</p>
              <span>-</span>
              <p>{item.address}</p>
            </div>
          </div>
          <div>
            <button className="bg-green-500 px-4 py-2 rounded">
              {" "}
              APPLY NOW{" "}
            </button>
            <button className="bg-green-500 px-4 py-2 rounded ml-5">
              {" "}
              REFER CANDIDATE{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl px-5">
        {item.detail.map((info, index) => (
          <div className="flex flex-col gap-7" key={index}>
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
        ))}
      </div>
    </>
  );
};

export default DetailJobPage;
