const Graphene = () => {
  const styles = {
    pageContainer: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f4f8',
      color: '#000000',
    },
    projectContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '40px',
    },
    header: {
      textAlign: 'center',
      color: '#004d99',
    },
    section: {
      marginTop: '20px',
      padding: '20px',
      background: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    subHeader: {
      color: '#0066cc',
      borderBottom: '2px solid #004d99',
      paddingBottom: '5px',
    },
    list: {
      paddingLeft: '20px',
    },
    link: {
      color: '#004d99',
      textDecoration: 'none',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap', // Ensures items wrap on small screens
    },
    flexItem: {
      flex: '1 1 45%', // Flex-grow, flex-shrink, flex-basis
      minWidth: '300px', // Ensures items don't shrink too small
    },
    fullFlexItem: {
      flex: '1 1 100%', // Full width on small screens
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.projectContainer}>
        <h1 style={styles.header}>Graphene Research Project</h1>
        <p>
          Welcome to our research project on Annuloplasty, a surgical procedure
          aimed at repairing and reconstructing the annulus, which is the ring-like
          part of a heart valve. Our project aims to improve the outcomes and
          techniques used in this critical procedure.
        </p>
        <section style={styles.section}>
          <h2 style={styles.subHeader}>About Annuloplasty</h2>
          <p>
            Annuloplasty is primarily used to treat conditions like mitral valve
            regurgitation and tricuspid valve regurgitation. The procedure involves
            placing a ring around the valve to tighten or reinforce the annulus,
            helping the valve to close more effectively.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeader}>Research Objectives</h2>
          <ul style={styles.list}>
            <li>To analyze the effectiveness of various annuloplasty techniques.</li>
            <li>To develop new materials and designs for annuloplasty rings.</li>
            <li>To evaluate patient outcomes and recovery times post-surgery.</li>
          </ul>
        </section>
        <div style={styles.flexContainer}>
          <section style={{ ...styles.section, ...styles.flexItem }}>
            <h2 style={styles.subHeader}>Our Team</h2>
            <p>
              Our multidisciplinary team includes cardiologists, surgeons, biomedical
              engineers, and researchers dedicated to advancing the field of valve
              repair surgery.
            </p>
          </section>
          <section style={{ ...styles.section, ...styles.flexItem }}>
            <h2 style={styles.subHeader}>Get Involved</h2>
            <p>
              We welcome collaboration and participation from other researchers,
              medical professionals, and institutions. If you are interested in
              contributing to our research or have any questions, please contact us
              at <a style={styles.link} href="mailto:research@annuloplastyproject.org">research@annuloplastyproject.org</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Graphene;
