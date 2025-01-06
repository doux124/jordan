import { Suspense, lazy } from "react";
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

  return (
    <div>
      <DynamicBackground image={"/jordan/images/latte.png"}/>
      <nav className="mt-10 mr-10 text-2xl flex justify-end">
        <a 
          className="navLink"
          onClick={() => navigate('/')}
        >
          <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px' }} />
        </a>
      </nav>
      <div className="section-heading text-center">
        Tools
      </div>

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
  );
};

export default Tools;
