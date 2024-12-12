import { Suspense, lazy } from "react";
import ToggleSection from "./ToggleSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { useNavigate } from 'react-router-dom';

const CardForm = lazy(() => import("./birthday/CardForm"));
const RGBWordInput = lazy(() => import("./rbgword/RGBWordInput"));
const Visualizer = lazy(() => import("./audiovisualiser/Visualiser"));
const PoliticianButton = lazy(() => import("./trading/PoliticianButton"));
const KeyboardButton = lazy(() => import("./piano/KeyboardButton"));
const VirtualPet = lazy(() => import("./virtualpet/VirtualPet"));

const Hidden = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="mt-10 mr-10 text-2xl flex justify-end">
        <a 
          className="navLink"
          onClick={() => navigate('/')}
        >
          <FontAwesomeIcon icon={faHome} />
        </a>
      </nav>
      <div className="section-heading text-center">
        Tools
      </div>

      <div className="w-full flex flex-col md:flex-row -mt-20 md:mt-0">
        <div className="w-full md:w-1/2">
          <ToggleSection title="Birthday Card">
            <Suspense fallback={<div>Loading...</div>}>
              <CardForm />
            </Suspense>
          </ToggleSection>
        </div>

        <div className="w-full md:w-1/2">
          <ToggleSection title="RBG Words">
            <Suspense fallback={<div>Loading...</div>}>
              <RGBWordInput />
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
              <PoliticianButton />
            </Suspense>
          </ToggleSection>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
          <ToggleSection title="Piano">
            <Suspense fallback={<div>Loading...</div>}>
              <KeyboardButton />
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
    </div>
  );
};

export default Hidden;
