import { useState } from "react";
import WebcamPiano from "./WebcamPiano";
import PianoPractice from "./PianoPractice";

export default function Piano() {
  const [useWebcam, setUseWebcam] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <button className="button-89" onClick={() => setUseWebcam((prev) => !prev)}>
        {useWebcam ? "Switch to Normal Piano" : "Switch to Webcam Piano"}
      </button>
      <div className="w-full max-w-2xl p-4 border rounded-lg shadow-md">
        {useWebcam ? <WebcamPiano /> : <PianoPractice />}
      </div>
    </div>
  );
}
