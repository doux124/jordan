import { Link } from 'react-router-dom';

const Embroidery = () => {
  return (
    <div>
      <div className="background-image"></div>
      <div className="hobbies-container p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/volunteering/carwash.jpg" alt="Steak" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">Project IMPAC</h3>
            <p className="text-sm text-[#483C32]">hehe</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/hobbies/sports/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg">«</Link>
          <Link to="/hobbies/origami/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">1</Link>
          <Link to="/hobbies/string/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">2</Link>
          <Link to="/hobbies/sports/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">3</Link>
          <div className="hover-scale bg-black ml-2 flex items-center justify-center w-10 h-10 rounded-full">
            <Link to="/hobbies/volunteering/" className="px-4 py-2 bg-blue-500 text-white rounded-lg">4</Link>
          </div>
          <Link to="/hobbies/volunteering/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">»</Link>
        </div>
      </div>
    </div>
  );
};

export default Embroidery;
