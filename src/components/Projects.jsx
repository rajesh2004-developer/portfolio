import { Code, EyeIcon } from 'lucide-react';
import { projects } from '../constants';

const Projects = () => {
  return (
    <div id="projects" className="p-3">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center">
        Projects made
      </h2>
      <div className="project-wrap">
        {projects &&
          projects.length &&
          projects.map((project) => (
            <div
              className="group max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden transition-all duration-1000"
              key={project.id}
            >
              <img
                className="rounded-lg h-70 w-120 object-cover"
                src={project.imgSrc}
                alt={project.name}
              />
              <div className="p-5 absolute top-[80%] group-hover:top-[20%] bg-white w-full border transition-all duration-300 h-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gradient">
                  {project.name}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project?.description}
                </p>
                <div className="flex justify-between px-2">
                  <a
                    target="_blank"
                    href={project.code}
                    className="inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Code
                    <Code />
                  </a>
                  <a
                    href={project.preview}
                    target="_blank"
                    className="inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Preview
                    <EyeIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Projects;
