import React from "react";

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
      <button
        onClick={handleShareClick}
        className="bg-[#3AD8B6] text-sm font-semibold px-4 py-2 rounded"
      >
        {" "}
        SHARE NOW{" "}
      </button>
    </div>
  );
};

export default ShareButton;
