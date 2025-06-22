"use client"
import CircleType from 'circletype';
import React, { useEffect, useRef } from 'react';

const CurvedCircle: React.FC = () => {

  const curvedCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (curvedCircleRef.current) {
      const circleType = new CircleType(curvedCircleRef.current);
      circleType.radius(280).dir(1); // Customize as needed
    }
  }, []);

  return (
    <div className="curved-circle" ref={curvedCircleRef}>
      * Education * System * Needs * System * Upgrade *
    </div>
  );
};

export default CurvedCircle;


