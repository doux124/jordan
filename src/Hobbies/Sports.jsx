import { Link } from 'react-router-dom';

const Embroidery = () => {
  return (
    <div>
      <div className="background-image"></div>
      <div className="hobbies-container p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        </div>

        <div className="flex justify-center mt-8">
          <Link to="/hobbies/string/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg">«</Link>
          <Link to="/hobbies/origami/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">1</Link>
          <Link to="/hobbies/string/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">2</Link>
          <div className="hover-scale bg-black ml-2 flex items-center justify-center w-10 h-10 rounded-full">
            <Link to="/hobbies/sports/" className="px-4 py-2 bg-blue-500 text-white rounded-lg">3</Link>
          </div>
          <Link to="/hobbies/volunteering/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">4</Link>
          <Link to="/hobbies/volunteering/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">»</Link>
        </div>
      </div>
    </div>
  );
};

export default Embroidery;
