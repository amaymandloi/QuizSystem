import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.css";


const formatRemainingTime = (time) => {
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  
  return `${minutes}:${seconds}`;

};

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
 
    return <div >Time up!</div>;
  } 
  return (
    <div>
      <div className="text">Remaining time</div>
      <div className="value">{formatRemainingTime(remainingTime)}</div>
      
    </div>
  );
};

function countdowntimer() {
  return (
    <div>
      
      <div>
        <CountdownCircleTimer
          isPlaying
          
          duration={240}
          colors={[["#000000", 0.33], ["#000000", 0.33], ["#A30000"]]}
          onComplete={() =>
            
            //window.location = "./Results"
            
            [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      
    </div>
  );
}
export default countdowntimer;
