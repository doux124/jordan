import "./styles.css";

const EEG = () => {
  const styles = {
    pageContainer: {
      backgroundColor: '#ffffff',
    },
    projectContainer: {
      backgroundColor: '#f0f4f8',
    },
    section: {
      backgroundColor: 'white',
    },
  };

  return (
    <div className="pageContainer" style={styles.pageContainer}>
      <div className="projectContainer" style={styles.projectContainer}>
        <section className="section">
          <h1 className="header">Virtual Arm with Multimodal Biased feedback for Improving EEG Motor Imagery Calibration Training </h1>
        </section>

        <section className="section">
          <h2 className="subHeader">Introduction</h2>
          <p className="flex-1 text-justify mt-2">
            intro
            <img src="/jordan/images/bci/eeg_cap.jpg" className="image w-[50vh] h-auto mx-auto mt-5 center" alt="Wet EEG Cap" />
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Experiment Design</h2>
          <p className="flex-1 text-justify mt-2">
            experiment deign
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Data Processing</h2>
          <p className="flex-1 text-justify mt-2">
            data
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Results</h2>
          <p className="flex-1 text-justify mt-2">
            results
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Links</h2>
          <p className="flex-1 text-justify mt-2">
            Our poster: 
            <a 
              href="/jordan/pdfs/bci_poster.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#004d99', textDecoration: 'underline', marginLeft: '10px' }}
            >
              View Poster
            </a>
            <br />
            Our research paper: 
            <a 
              href="/jordan/pdfs/bci_report.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#004d99', textDecoration: 'underline', marginLeft: '10px' }}
            >
              View Report
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default EEG;
