import { useRef, useState } from "react";

const BentoTilt = ({children, className=''}) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if(!itemRef.current) return;

    const {left, width, top, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeX -0.5) * 5;
    const tiltY = (relativeY -0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle('');
  }
  return ( 
    <div 
    className={className} 
    ref={itemRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{transform: transformStyle}}
    >
      {children}
      </div>
   );
}
 
export default BentoTilt;