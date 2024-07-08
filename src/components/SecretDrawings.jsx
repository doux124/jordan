const SecretDrawings = ({ show }) => {
    return (
        <div className={`secret-drawings ${show ? 'show' : ''}`}>
            <img src="/jordan/sprites/hollow_knight.png" className="full-width"/>
        </div>
    );
};

export default SecretDrawings;
