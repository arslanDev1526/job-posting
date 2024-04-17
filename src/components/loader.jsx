import React from 'react'
import { Circles } from "react-loader-spinner";

const Loader = () => {
    return (
      <div
        style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 99
        
        }}
      >
        <Circles
          height={80}
          width={80}
          color="#4fa94d"
          ariaLabel="circles-loading"
        />
      </div>
    );
  };

export default Loader;