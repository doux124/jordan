const Contact = () => {
    return (
        <div className="contact-section">
            <h2 className="contact-heading text-2xl md:text-4xl">Contact Information</h2>
            <p className="contact-details text-base md:text-xl">
            Feel free to reach out to me via email or follow me on social media:
            </p>
            <ul className="contact-list text-base md:text-xl">
            <li>Email: <a href="mailto:biev124@nus.edu.sg?subject=Contact%20from%20Website&body=Hi%20Jordan,">biev124@nus.edu.sg</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/jordan-low-jun-yi-69a150279" target="_blank" rel="noopener noreferrer">linkedin.com/in/jordan-low-69a150279</a></li>
            <li>Google Scholar: <a href="https://scholar.google.com/citations?hl=en&user=O6M8clAAAAAJ" target="_blank" rel="noopener noreferrer">https://scholar.google.com/citations?hl=en&user=O6M8clAAAAAJ</a></li>
            </ul>
        </div>
    );
};

export default Contact;