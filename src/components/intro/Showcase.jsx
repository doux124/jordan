const Showcase = () => {
    const projects = [
      {
        image: "/jordan/images/featured_works/RoverX.jpeg",
        title: "Rover X",
        description: "Rover X is a surveillance dog launched by HomeTeam in 2022. However, it had severe overheating issues. During my time at MDS+, I suggested and implemented several ideas to improve its heat dissipation.",
      },
      {
        image: "/jordan/images/featured_works/polymer_ring.png",
        title: "Project 2",
        description: "I came up with the idea to make annuloplasty rings out of shape memory materials. Two versions made of out different materials were made, which demonstrated promise in allowing for minimally invasive annuloplasty surgeries as well as pediatric applications for mitral valve regurgitation in patients.",
      },
      {
        image: "/jordan/images/featured_works/eeg_cap.jpg",
        title: "Project 3",
        description: "I conducted experimental trials using multimodal methods in order to find more accurate methods of training SVM models on EEG data. I was able to improve the training accuracy of these ML models, which could be applied in rehabilitation as well as prosthetics.",
      },
    ];
  
    return (
      <div className="flex flex-col gap-12 mt-8">
        <h2 className="section-heading flex-center">Project Showcase</h2>
        {projects.map((project, index) => (
          <div key={index} className={`flex-center flex-col gap-8 md:gap-0 -mt-8 md:-mt-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <img src={project.image} alt={project.title} className="w-full md:w-2/5 rounded-lg object-cover" />
            <div className="w-full md:w-2/5">
                <h2 className="text-2xl font-bold mb-4 flex-center">{project.title}</h2>
                <p className="text-lg text-black dark:text-white flex-center pb-5 md:pb-0 md:px-5">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Showcase;
  