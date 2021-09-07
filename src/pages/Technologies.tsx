import React, { useState, FormEvent } from "react";

const Technologies: React.FC = () => {
  const [technologies, setTechnologies] = useState<string[]>(["React"]);
  const [newTech, setNewTech] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!newTech || technologies.includes(newTech)) return;

    setTechnologies([...technologies, newTech]);
    setNewTech("");
  }

  function handleDelete(tech: string) {
    setTechnologies(technologies.filter((techItem) => techItem !== tech));
  }

  return (
    <>
      <ul id="ul-techs">
        {technologies.map((tech, index) => (
          <li id={tech} key={tech}>
            {tech}
            {"  "}
            <button
              disabled={index === 0}
              data-testid={`${tech}-btn-delete`}
              type="button"
              onClick={() => handleDelete(tech)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <form id="form-add-tech" onSubmit={handleSubmit}>
        <input
          id="input-add-tech"
          type="text"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Technologies;
