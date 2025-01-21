import { Suspense, lazy, useState, useEffect } from "react";
import ToggleSection from "./ToggleSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { useNavigate } from 'react-router-dom';
import '../CV/styles.css'

import DynamicBackground from "../standards/DynamicBackground";

const RGBWordInput = lazy(() => import("./rbgword/RGBWordInput"));
const Visualizer = lazy(() => import("./audiovisualiser/Visualiser"));
const VirtualPet = lazy(() => import("./virtualpet/VirtualPet"));

const Tools = () => {
  const navigate = useNavigate();
  const [temperature, setTemperature] = useState(-10);
  const [gravity, setGravity] = useState(false);
  const [count, setCount] = useState(40);
  const [flash, setFlash] = useState(false);
  const [prevProps, setPrevProps] = useState({ gravity, count, temperature });

  useEffect(() => {
    if (temperature > 0) {
      setGravity(false);
      setCount(20);
    } else if (temperature > -10) {
      setGravity(false);
      setCount(80-temperature*2);
    } else {
      setGravity(true);
      setCount(80-temperature*2);
    }
  }, [temperature]);

  useEffect(() => {
    const hasChanged = 
      prevProps.gravity !== gravity ||
      prevProps.count !== count ||
      prevProps.temperature !== temperature;

    if (hasChanged) {
      setFlash(true);
      setTimeout(() => setFlash(false), 300);
      setPrevProps({ gravity, count, temperature });
    }
  }, [gravity, count, temperature]);

  return (
    <div>
      <div>
        <DynamicBackground
          image={"/jordan/images/snowflake.png"}
          gravity={gravity}
          count={count}
          minSize={1}
          maxSize={4}
          minRotation={300}
          maxRotation={360}
        />
        {/* Flash overlay */}
        <div
          className={`fixed inset-0 bg-gray-400 pointer-events-none transition-opacity duration-300 z-50 ${
            flash ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <nav className="mt-10 mr-10 text-2xl flex justify-end">
          <a 
            className="navLink"
            onClick={() => navigate('/')}
          >
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px' }} />
          </a>
        </nav>
        <h1 className="section-heading text-center">
          Tools
        </h1>

        <div className="w-full flex flex-col md:flex-row -mt-20 md:mt-0">
          <div className="w-full md:w-1/2">
            <ToggleSection title="RBG Words">
              <Suspense fallback={<div>Loading...</div>}>
                <RGBWordInput />
              </Suspense>
            </ToggleSection>
          </div>
          <div className="w-full md:w-1/2">
            <ToggleSection title="Virtual Pet">
              <Suspense fallback={<div>Loading...</div>}>
                <VirtualPet />
              </Suspense>
            </ToggleSection>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <ToggleSection title="Music Visualiser">
              <Suspense fallback={<div>Loading...</div>}>
                <Visualizer />
              </Suspense>
            </ToggleSection>
          </div>

          <div className="w-full md:w-1/2">
          <ToggleSection title="Trading">
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex-center">
                    <button className="button-49 text-2xl" onClick={() => navigate('/trading')}>Click Here</button>
                </div>
              </Suspense>
            </ToggleSection>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <ToggleSection title="Piano">
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex-center">
                    <button className="button-49 text-2xl" onClick={() => navigate('/piano')}>Click Here</button>
                </div>
              </Suspense>
            </ToggleSection>
          </div>
        </div>
      </div>
      <div className='mb-44'>
        <h2 className="text-center text-3xl z-1 my-10">
          Thermostat
        </h2>
        <div className="flex flex-col items-center">
          <label htmlFor="temperature-input" className="text-lg mb-4">
            Temperature (-30°C to 10°C): <span>{temperature}°C</span>
          </label>
          <input
            id="temperature-input"
            type="text"
            className="w-24 p-2 border border-gray-300 rounded-md text-center text-black"
            placeholder="Temp"
            onBlur={(e) => {
              const value = Number(e.target.value);
              if (!isNaN(value)) {
                if (value < -30) {
                  setTemperature(-30);
                } else if (value > 10) {
                  setTemperature(10);
                } else {
                  setTemperature(value);
                }
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const value = Number(e.target.value);
                if (!isNaN(value)) {
                  if (value < -30) {
                    setTemperature(-30);
                  } else if (value > 10) {
                    setTemperature(10);
                  } else {
                    setTemperature(value);
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;