import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const simulateUpload = async () => {
    setProgress(0);
    const fileSize = file.size;
    for (let i = 0; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 15));
      const simulatedProgress = Math.floor((i / 100) * fileSize);
      setProgress(simulatedProgress);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <label htmlFor="upload-file" className="flex items-center text-sm font-medium text-gray-700">
        <svg
          className="w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Upload File
      </label>
      <input
        type="file"
        id="upload-file"
        hidden
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div className="flex items-center ml-4 mt-4">
          <div className="text-xs font-medium text-gray-700 mr-2">
            {selectedFile.name}
          </div>  {/* Added line to display filename */}
          <div className="ml-4 bg-gray-200 rounded-lg px-4 py-2 flex items-center">
            <div
              className="h-4 bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
            <div className="text-xs font-semibold text-gray-700 ml-2">
              {progress}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
