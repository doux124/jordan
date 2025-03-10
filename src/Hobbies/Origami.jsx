import { Link } from 'react-router-dom';

const Origami = () => {
  return (
    <div>
      <div className="background-image"></div>
      <div className="hobbies-container p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/origami/origami.jpg" alt="Steak" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">Squirrel on a Unicorn</h3>
            <p className="text-sm text-[#483C32]">Took a longg time to fold this</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/hobbies/origami/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg">«</Link>
          <div className="hover-scale bg-black ml-2 flex items-center justify-center w-10 h-10 rounded-full">
            <Link to="/hobbies/origami/" className="px-4 py-2 bg-blue-500 text-white rounded-lg">1</Link>
          </div>
          <Link to="/hobbies/string/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">2</Link>
          <Link to="/hobbies/sports/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">3</Link>
          <Link to="/hobbies/volunteering/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">4</Link>
          <Link to="/hobbies/string/" className="hover-scale px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">»</Link>
        </div>
      </div>
    </div>
  );
}

export default Origami