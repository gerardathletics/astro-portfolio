import React, { useState } from 'react';
import { IconLink, IconEye } from '@tabler/icons-react';

const Projects = ({ dataProjects }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        console.log('openModal called with project:', project); // Debug statement
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataProjects.map((project, index) => (
                    <article key={index} className="bg-white/10 rounded-lg overflow-hidden shadow transition-all hover:shadow-xl hover:scale-105">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="flex flex-col p-4">
                            <h3 className="text-sm font-semibold mb-2">{project.title}</h3>
                            <div className="flex flex-wrap gap-1 text-xs mb-4">
                                {project.techs.map((tech, i) => (
                                    <span key={i} className="border border-white md:border-gray-300 bg-black/50 md:bg-gray-50/5 rounded-md px-2 py-0.5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="text-sm text-white hover:text-yellow-200 flex items-center gap-1" onClick={() => openModal(project)}>
                                    <IconEye size={16} /> See More
                                </button>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
                                        <IconLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {selectedProject && (
                <div id="projectModal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full mx-4">
                        <h2 id="modalTitle" className="text-2xl font-bold mb-4">
                            {selectedProject.title}
                        </h2>
                        <p id="modalDescription" className="text-gray-300 mb-4">
                            {selectedProject.description}
                        </p>
                        <div id="modalTechs" className="flex flex-wrap gap-2 mb-4">
                            {selectedProject.techs.map((tech, i) => (
                                <span key={i} className="bg-gray-700 text-white rounded-md px-2 py-0.5">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;
