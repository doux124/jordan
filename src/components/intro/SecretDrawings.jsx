const SecretDrawings = ({ show }) => {
    return (
        <div className={`secret-drawings ${show ? 'show' : ''}`}>
            <div className="image-container"></div>
        </div>
    );
};

export default SecretDrawings;
