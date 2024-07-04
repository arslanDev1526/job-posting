import React from "react";
// import { useLocation, useParams } from "react-router-dom";

// const { id } = useParams();
// const location = useLocation();

// const searchParams = new URLSearchParams(location.search);
// const department = searchParams.get("department");

const ShareButton = () => {
  const data = {
    title: "Item 1",
    text: "This is the first item",
    url: "https://example.com/item1",
  };

  const handleShareClick = () => {
    if (navigator.canShare(data)) {
      navigator
        .share(data)
        .then(() => {
          console.log("Share done");
        })
        .catch((error) => {
          console.log("Share error", error);
        });
    } else {
      console.log("Browser doesn't support sharing");
    }
  };

  return (
    <div>
      <button onClick={handleShareClick} className="bg-green-200 text-green-900 hover:bg-green-900 hover:text-white px-5 py-2.5 rounded-md text-md font-semibold">
        Share Now
      </button>
    </div>
  );
};

export default ShareButton;
