import ToggleSection from "./ToggleSection";
import CardForm from "./birthday/CardForm";
import RGBWordInput from "./rbgword/RGBWordInput";

const Hidden = () => {
  return (
    <div>
      <div className="section-heading text-center" style={{ opacity: 1 }}>
        Tools
      </div>

      <div className="w-full flex mt-10">
      <div className="w-1/2">
          <ToggleSection title="Birthday Card">
            <CardForm />
          </ToggleSection>
        </div>

        <div className="w-1/2">
          <ToggleSection title="RBG Words">
            <RGBWordInput />
          </ToggleSection>
        </div>

        <div className="w-1/2">
          {/* Right Half */}
        </div>
      </div>
    </div>
  );
};

export default Hidden;
