import React from 'react';

const BackgroundCube = ({ className }) => {
  const containerClasses = className || "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[200px] md:h-[200px]";
  return (
    <div className={`cube-container absolute ${containerClasses} z-0 pointer-events-none opacity-80`}>
      <div className="cube w-full h-full relative preserve-3d animate-spin-slow-reverse">
        {/* Glowing Cube Faces */}
        {/* Vertical Faces: gradient from top to bottom */}
        <div className="cube-face face-front absolute w-full h-full border-2 border-primary/60 shadow-[0_0_25px_rgba(182,139,255,0.4)_inset,0_0_25px_rgba(182,139,255,0.4)] bg-gradient-to-b from-primary/90 to-black backdrop-blur-sm"></div>
        <div className="cube-face face-back absolute w-full h-full border-2 border-primary/60 shadow-[0_0_25px_rgba(182,139,255,0.4)_inset,0_0_25px_rgba(182,139,255,0.4)] bg-gradient-to-b from-primary/90 to-black backdrop-blur-sm"></div>
        <div className="cube-face face-right absolute w-full h-full border-2 border-primary/60 shadow-[0_0_25px_rgba(182,139,255,0.4)_inset,0_0_25px_rgba(182,139,255,0.4)] bg-gradient-to-b from-primary/90 to-black backdrop-blur-sm"></div>
        <div className="cube-face face-left absolute w-full h-full border-2 border-primary/60 shadow-[0_0_25px_rgba(182,139,255,0.4)_inset,0_0_25px_rgba(182,139,255,0.4)] bg-gradient-to-b from-primary/90 to-black backdrop-blur-sm"></div>
        
        {/* Top Face: Purple */}
        <div className="cube-face face-top absolute w-full h-full border-2 border-primary/60 shadow-[0_0_25px_rgba(182,139,255,0.4)_inset,0_0_25px_rgba(182,139,255,0.4)] bg-primary/90 backdrop-blur-sm"></div>
        
        {/* Bottom Face: Black/Purple mixture */}
        <div className="cube-face face-bottom absolute w-full h-full border-2 border-primary/60 shadow-[0_0_25px_rgba(182,139,255,0.4)_inset,0_0_25px_rgba(182,139,255,0.4)] bg-gradient-to-br from-primary/40 to-black backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default BackgroundCube;
