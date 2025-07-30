import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Spline 
          scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

export default SplineScene;