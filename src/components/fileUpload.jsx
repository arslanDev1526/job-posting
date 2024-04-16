import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const simulateUpload = async () => {
    setProgress(0);
    for (let i = 0; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 15));
      setProgress(i);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    simulateUpload();
  };

  return (
    <div className="flex items-center justify-center w-5/6">
      <div className="border border-dotted border-gray-400 rounded-md flex flex-col justify-center w-full h-32">
        <input
          id="cv-upload"
          type="file"
          className={
            progress === 100 ? "text-blue-400 mx-auto" : "text-grey-400 mx-auto"
          }
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />

        {progress > 0 && progress < 100 && (
          <div className=" rounded-lg px-4 mt-5">
            <div
              className="h-2 bg-green-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
