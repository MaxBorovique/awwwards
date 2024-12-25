import { useRef } from "react";
import { useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos(prevVideo => prevVideo + 1)
  }
  
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = index => `videos/hero-${index}.mp4`
  return ( 
    <div className="relative h-dvh">
      <div id="video-frame" className="relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75">
        <div>
          <div className="absolute z-50 overflow-hidden rounded-lg cursor-pointer absolute-center mask-clip-path size-64">
            <div onClick={handleMiniVdClick} className="transition-all duration-500 ease-in origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100">
              <video 
              ref={nextVideoRef} 
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              id='current-video'
              className="object-cover object-center origin-center scale-150 size-64"
              onLoadedData={handleVideoLoad}
            />
            </div>
          </div>

          <video 
          ref={nextVideoRef} 
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video" 
          className="absolute z-20 invisible object-cover object-center absolute-center size-64"
          onLoadedData={handleVideoLoad}
          />

          <video
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 object-cover object-center size-full"
          />
        </div>
      </div>
    </div>
   );
}
 
export default Hero;