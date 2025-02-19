import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center font-thin text-6xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-19 mt-[1rem] flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={100}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 100 }}
              initial={{ opacity: 0, x: 300 }}
              transition={{ duration: 1.5 }}
              className="w-full mt-[5rem] ml-[4rem] max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-3xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-2xl text-gray-500">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 text-2xl rounded bg-neutral-900 px-2 py-1 text-sssm font-medium text-purple-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              <h6 className="mt-[2rem] text-xl">
                Link:{" "}
                <a
                  className="text-blue-300 hover:text-blue-500 border-b"
                  href={`${project.link}`}
                >
                  {project.link}{" "}
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
