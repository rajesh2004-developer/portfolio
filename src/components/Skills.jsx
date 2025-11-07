import { skills } from '../constants';
import React from 'react';

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center mb-6 sm:mb-8 lg:mb-12 text-white">
        Skills and Abilities
      </h2>
      <div
        id="skills-wrap"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 max-w-7xl mx-auto"
      >
        {skills &&
          skills.length > 0 &&
          skills.map((skill) => (
            <div
              className="bg-slate-950/90 hover:bg-black/90 rounded-lg sm:rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-700 hover:scale-105 active:scale-95"
              key={skill.id}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={skill.imgSrc}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-white text-lg font-medium capitalize text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
