import React, { useEffect, useRef, useState } from "react";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

const HandDetection = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [stream, setStream] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      await tf.setBackend("webgl");
      const detectorConfig = {
        runtime: "tfjs",
        modelType: "lite"
      };
      const detector = await handPoseDetection.createDetector(
        handPoseDetection.SupportedModels.MediaPipeHands,
        detectorConfig
      );
      setModel(detector);
    };

    loadModel();
  }, []);

  const toggleCamera = async () => {
    if (isCameraOn) {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
    } else {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
      setStream(newStream);
    }
    setIsCameraOn(!isCameraOn);
  };

  useEffect(() => {
    const startVideo = async () => {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
      setStream(newStream);
    };
    startVideo();
  }, []);

  useEffect(() => {
    const detectHands = async () => {
      if (model && videoRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        video.width = 800;
        video.height = 600;
        canvas.width = 800;
        canvas.height = 600;

        const renderFrame = async () => {
          const hands = await model.estimateHands(video, { flipHorizontal: true });
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          if (hands.length > 0) {
            hands.forEach(hand => {
              const fingerTips = [4, 8, 12, 16, 20];
              fingerTips.forEach(index => {
                const point = hand.keypoints[index];
                if (point) {
                  ctx.beginPath();
                  ctx.arc(point.x, point.y, 8, 0, 2 * Math.PI);
                  ctx.fillStyle = "red";
                  ctx.fill();

                  ctx.fillStyle = "white";
                  ctx.font = "12px Arial";
                  ctx.fillText(`(${Math.round(point.x)}, ${Math.round(point.y)})`, point.x + 5, point.y - 5);
                }
              });
            });
          }
          requestAnimationFrame(renderFrame);
        };

        requestAnimationFrame(renderFrame);
      }
    };
    detectHands();
  }, [model]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <button onClick={toggleCamera} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
      <div className="relative w-[800px] h-[600px]">
        <video ref={videoRef} autoPlay playsInline className="absolute w-full h-full transform scale-x-[-1]" />
        <canvas ref={canvasRef} className="absolute w-full h-full" />
      </div>
    </div>
  );
};

export default HandDetection;
