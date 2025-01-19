import { Suspense, lazy } from "react";
import ToggleSection from "./ToggleSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { useNavigate } from 'react-router-dom';
import '../CV/styles.css'

import DynamicBackground from "../standards/DynamicBackground";

const CardForm = lazy(() => import("./birthday/CardForm"));

const Hidden = () => {
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
        Hidden Tools
      </div>

      <div className="w-full flex flex-col md:flex-row -mt-20 md:mt-0">
        <div className="w-full md:w-1/2">
          <ToggleSection title="Birthday Card">
            <Suspense fallback={<div>Loading...</div>}>
              <CardForm />
            </Suspense>
          </ToggleSection>
        </div>
      </div>
    </div>
  );
};

export default Hidden;
