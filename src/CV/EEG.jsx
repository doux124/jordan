const EEG = () => {
  const styles = {
    pageContainer: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    projectContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f0f4f8',
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
        <h1 style={styles.header}>EEG Research Project</h1>
        <p>
          yap
        </p>
        <section style={styles.section}>
          <h2 style={styles.subHeader}>yap</h2>
          <p>
            yap
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeader}>yap</h2>
          <ul style={styles.list}>
            <p>yap</p>
          </ul>
        </section>
        <div style={styles.flexContainer}>
          <section style={{ ...styles.section, ...styles.flexItem }}>
            <h2 style={styles.subHeader}>yap</h2>
            <p>
              yap
            </p>
          </section>
          <section style={{ ...styles.section, ...styles.flexItem }}>
            <h2 style={styles.subHeader}>yap</h2>
            <p>
              yap
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EEG;
