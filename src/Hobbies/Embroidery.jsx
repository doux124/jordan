const Embroidery = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-[#FFECD1] rounded-lg text-white">
          <img src="/jordan/images/jellyfish.jpg" alt="Steak" className="w-full rounded-lg mb-2" />
          <h3 className="text-lg font-semibold mb-1 text-[#483C32]">:D</h3>
          <p className="text-sm text-[#483C32]">Isn't this jellyfish cute</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg">«</a>
        <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">1</a>
        <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">2</a>
        <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">3</a>
        <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">4</a>
        <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">»</a>
      </div>
    </div>
  );
};

export default Embroidery;
