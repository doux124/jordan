const SecretDrawings = ({ show }) => {
    return (
        <div className={`secret-drawings ${show ? 'show' : ''}`}>
            <h2>Secret Drawings</h2>
            {/* Add your drawings here */}
        </div>
    );
};

export default SecretDrawings;
