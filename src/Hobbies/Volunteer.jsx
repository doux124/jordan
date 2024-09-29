import { Link } from 'react-router-dom';

const Embroidery = () => {
  return (
    <div>
      <div className="background-image"></div>
      <div className="hobbies-container p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/volunteering/carwash.jpg" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">Overall in Charge of Project IMPAC</h3>
            <p className="text-sm text-[#483C32]">TDLR we raised funds to teach underprivileged Cambodian students how to make and sell masks during COVID.</p>
          </div>

          <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/volunteering/tassel.jpg" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">Elderly Engagement with Lions Befrienders</h3>
            <p className="text-sm text-[#483C32]">I partnered with Lions Befrienders and started a project where we taught the elderly how to make tassels for their friends and family.</p>
          </div>
          
          <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/volunteering/ash.jpg" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">All Saints Home @ Jurong East</h3>
            <p className="text-sm text-[#483C32]">As a volunteer at All Saints Home, I document stories of residents there and craft them into a book for their loved ones to read.</p>
          </div>

          <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/working.jpg" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">Reading Odyssey under SHINE Children & Youth Services</h3>
            <p className="text-sm text-[#483C32]">We help underprivileged children catch up with their peers through reading.</p>
          </div>

          <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/volunteering/lkh.jpg" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">Ling Kwang Home</h3>
            <p className="text-sm text-[#483C32]">I am the Overall in Charge for planning and executing Resident's Day 2022 at Ling Kwang Home.</p>
          </div>

          <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
            <img src="/jordan/images/hobbies/working.jpg" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-[#483C32]">Hi!</h3>
            <p className="text-sm text-[#483C32]">This page is still being coded, it will be up soon!</p>
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
