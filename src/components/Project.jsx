import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className="my-16 text-center font-thin text-4xl md:text-6xl"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col items-center space-y-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:justify-center w-full max-w-4xl px-6"
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1.5 }}
              className="flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded w-full max-w-xs md:max-w-sm"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1.5 }}
              className="w-full mt-6 md:mt-0 md:ml-8"
            >
              <h6 className="mb-2 text-2xl md:text-3xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-lg md:text-2xl text-gray-500">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="text-sm md:text-lg rounded bg-neutral-900 px-3 py-1 font-medium text-purple-400"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <h6 className="mt-6 text-lg md:text-xl">
                Link:{" "}
                <a
                  className="text-blue-300 hover:text-blue-500 border-b"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
