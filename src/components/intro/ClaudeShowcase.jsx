import React, { useState } from 'react';
import { ChevronDown, ExternalLink, X } from 'lucide-react';

const MobileProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack shopping platform built with Next.js and Node. Features include user authentication, payment processing, and real-time inventory tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/api/placeholder/800/400",
      link: "#",
      details: "• Built with performance in mind\n• 98% Lighthouse score\n• Full PWA support"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather tracking with interactive maps. Integrates multiple weather APIs for accurate forecasting.",
      tags: ["JavaScript", "APIs", "D3.js"],
      image: "/api/placeholder/800/400",
      link: "#",
      details: "• Real-time updates\n• Location-based alerts\n• Interactive radar maps"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features.",
      tags: ["React", "Firebase", "Tailwind"],
      image: "/api/placeholder/800/400",
      link: "#",
      details: "• Team collaboration\n• Real-time updates\n• Custom workflows"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Project List View */}
      <div className="p-4">
        {projects.map((project) => (
          <div key={project.id} className="mb-6">
            <div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 m-2">
                  <a 
                    href={project.link}
                    className="p-2 bg-white rounded-full shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </a>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="w-full mt-2 flex items-center justify-center text-blue-600 text-sm"
                  onClick={() => setActiveProject(project)}
                >
                  View Details
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Project Detail View */}
      {activeProject && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="relative">
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-56 object-cover"
            />
            <button
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
              onClick={() => setActiveProject(null)}
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-700 mb-6">
              {activeProject.description}
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Key Features</h3>
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                {activeProject.details}
              </pre>
            </div>
            
            <a
              href={activeProject.link}
              className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center"
            >
              View Project <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileProjectShowcase;