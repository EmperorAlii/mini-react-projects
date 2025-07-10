import React from "react";

const Skills = () => {
  return (
    <>
      <ul className="mx-2 mt-2">
        {/* Row one */}
        <div className="flex gap-3">
          <li className="bg-blue-500 w-auto">HTML+CSS💪</li>
          <li className="bg-amber-300">Javascript💪</li>
        </div>

        {/* Row two */}
        <div className="flex gap-3 mt-1">
          <li className="bg-green-300">Web design💪</li>
          <li className="bg-red-400">Git and Github👍</li>
        </div>

        {/* Row Three */}
        <div className="flex gap-3 mt-1 mb-2">
          <li className="bg-sky-400">React💪</li>
          <li className="bg-red-600">Svelte👶</li>
        </div>
      </ul>
    </>
  );
};

export default Skills;
