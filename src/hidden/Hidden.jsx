import { Suspense, lazy } from "react";
import ToggleSection from "./ToggleSection";

const CardForm = lazy(() => import("./birthday/CardForm"));
const RGBWordInput = lazy(() => import("./rbgword/RGBWordInput"));
const Visualizer = lazy(() => import("./audiovisualiser/Visualiser"));

const Hidden = () => {
  return (
    <div>
      <div className="section-heading text-center mt-10" style={{ opacity: 1 }}>
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
          <ToggleSection title="Blank">
          </ToggleSection>
        </div>
      </div>
    </div>
  );
};

export default Hidden;
