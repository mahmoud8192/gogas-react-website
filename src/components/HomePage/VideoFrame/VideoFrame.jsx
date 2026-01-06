import { useState } from "react";
import CloseBtn from "./CloseBtn";
import IFrame from "./IFrame";
import WavesAround from "./WavesAround";
import PlayVideoBtn from "./PlayVideoBtn";

function VideoFrame({videoSrc,imgSrc}) {

  const [isPlaying, setIsPlaying] = useState(false);
  const style = {
    base: "bg_img w-full h-full  relative  p-4 rounded-md ",
  };
  function playClickHandler() {
    setIsPlaying(true);
  }
  function reset() {
    setIsPlaying(false);
  }

  return (
    
    <div
      className={style.base}
      style={{ backgroundImage: `url(${isPlaying || imgSrc})` }}
    >
      {isPlaying && (
        <>
          <CloseBtn reset={reset} />
          <IFrame videoSrc={videoSrc} />
        </>
      )}
      {!isPlaying && (
        <WavesAround>
          <PlayVideoBtn onPlayVid={playClickHandler} />
        </WavesAround>
      )}
    </div>
  );
}

export default VideoFrame;
/** problem-desc: wave-animation on play button
 * i have 2-choices
 * -  1- increas the number of html elements(lets say abosluted spannes) 
     and then apply deffrent delay on each 
 * 
 *    2- ican add two layers using psuedo elements(such as:  after,before) with different delay  
 *    
 *    -- conc:
 *    -- 1- is customizable but intensive resouce requirments (html elements) , 2- simple but less customizable  
 *       in my case iwill use choice 2 becouse of it's simplicity and resource requirments .--     
 * 
 *  */