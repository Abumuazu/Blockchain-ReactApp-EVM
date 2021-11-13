import React from 'react';
import Lottie from 'react-lottie';
import animationData from "./loadingAsset.json";

export default function Loading() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        style={{margin: "0 auto"}}
      />
    </div>
  );
}