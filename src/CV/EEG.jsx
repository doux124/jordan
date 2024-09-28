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
        <section className="section" style={styles.section}>
          <h1 className="header">Virtual Arm with Multimodal Biased feedback for Improving EEG Motor Imagery Calibration Training </h1>
        </section>

        <section className="section" style={styles.section}>
          <h2 className="subHeader">Keywords</h2>
          <p className="flex-1 text-justify mt-2">
            1. Electroencephalogram (EEG), Brain Computer Interface (BCI), Motor Imagery (MI)
            <br />
            2. Machine Learning (ML), Support Vector Machine (SVM), PsychoPy
          </p>
        </section>

        <section className="section" style={styles.section}>
          <h2 className="subHeader">The Brain Computer Interface</h2>
          <p className="flex-1 text-justify mt-2">
            Every action made by a person produces signals in the brain. These signals can be picked up by 
            an electroencephalogram (EEG). Different actions result in different EEG signal patterns in the 
            brain. By recording and deciphering the signals, we can tell what action the person intended to 
            perform. In motor rehabilitation, we use these signals to allow users to communicate with their 
            prosthetic arm. This is done through MI Brain Computer Interface (MI BCI) training, where the 
            user learns to communicate with the BCI.
            <img src="/jordan/images/bci/imagery.jpg" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            <br />
            However, MI BCIs demand long training spanning several weeks. This is because the training process 
            is a counterintuitive task for patients. Most patients cannot visualize vivid imagery and a kinesthetic 
            experience of the required actions. In our project, we demonstrate a setup involving the use of a virtual arm 
            that acts out each action for a more intuitive experience.
            <img src="/jordan/images/bci/arm.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
          </p>
        </section>

        <section className="section" style={styles.section}>
          <h2 className="subHeader">Experiment Design</h2>
          <p className="flex-1 text-justify mt-2">
            In our setup, we used a wet EEG, which utilizes an electrically conductive gel to capture the 
            participant's brain signals. A Tobii eye tracker was also employed to monitor the participant's 
            eye movement. During the actual experiment, the lights are kept off to reduce external stimuli; 
            they are only on here for demonstration purposes.
            <img src="/jordan/images/bci/eeg_cap.jpg" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            <br />
            We recruited 13 participants, all of whom provided written informed consent and were monetarily 
            compensated for their participation. Each participant underwent MI BCI training in two separate 
            sessions—one with, and one without, the virtual arm—presented in random order. The training 
            process is complex, and the detailed methodology can be found in our paper, but can be summarized in the diagram below.
            <img src="/jordan/images/bci/block_diagram.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
          </p>
        </section>

        <section className="section" style={styles.section}>
          <h2 className="subHeader">Data Collection</h2>
          <p className="flex-1 text-justify mt-2">
            The experiment is fully automated and paced by a Python program we made using PsychoPy. 
            It displays on-screen instructions and visual stimuli required for MI tasks and communicates 
            with the EEG cap, detailing indivisualized time stamps correlating with the user's pace for us 
            to match up with the EEG data later.
            <img src="/jordan/images/bci/stim.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
            <br />
            We process the EEG signals by removing noise and unwanted data, followed by selecting and extracting 
            important features to be used in classification. These features will be used to predict the user's intended action.
            <img src="/jordan/images/bci/feature_extractor.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
            <br />
            75% of the data collected will be used to train our Support Vector Machine (SVM) based Machine Leaning 
            (ML) model, while the remaining 25% will be used to test the accuracy of the model.
            <img src="/jordan/images/bci/feature_classification.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
          </p>
        </section>

        <section className="section" style={styles.section}>
          <h2 className="subHeader">Results</h2>
          <p className="flex-1 text-justify mt-2">
            Classification accuracies across MI tasks ranged from 97.69% to 99.80%, demonstrating that our setup can 
            indeed lead to high accuracy classification models.
            <img src="/jordan/images/bci/results1.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
          </p>
        </section>

        <section className="section" style={styles.section}>
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
