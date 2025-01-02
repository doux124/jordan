import './resume.css'
import { useEffect, useState, useCallback } from 'react';

const Resume = () => {
  const [resumeText, setResumeText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResumeText = async () => {
      try {
        const response = await fetch('/jordan/resume/resume.txt');
        const data = await response.text();
        setResumeText(data);
      } catch (error) {
        console.error('Error fetching resume text:', error);
      }
    };

    fetchResumeText();
  }, []);

  const downloadPDF = useCallback(async () => {
    setLoading(true);
    try {
      const element = document.getElementById('resume-container');
      if (!element) return;

      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        0,
        0,
        imgWidth,
        imgHeight
      );

      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <div id="resume-container" className="resume-container">
        <header>
          <h1 className='text-6xl font-bold'>Jordan Low</h1>
          <p>Software Engineer</p>
          <div>
            <p>john.doe@email.com</p>
            <p>(123) 456-7890</p>
            <p>City, Country</p>
          </div>
        </header>

        <section>
          <h2>Summary</h2>
          <p>{resumeText || 'Loading summary...'}</p>
        </section>

        <section>
          <h2>Experience</h2>
          <div>
            <h3>Software Engineer</h3>
            <p>XYZ Tech Solutions</p>
            <p>Jan 2021 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to design and implement new features.</li>
              <li>Optimized application performance and improved loading times by 30%.</li>
            </ul>
          </div>
        </section>

        <footer>
          <p>Portfolio: www.johndoe.com | LinkedIn: linkedin.com/in/johndoe</p>
        </footer>
      </div>

      <button
        onClick={downloadPDF}
        disabled={loading}
      >
        {loading ? 'Generating PDF...' : 'Download Resume as PDF'}
      </button>
    </div>
  );
};

export default Resume;