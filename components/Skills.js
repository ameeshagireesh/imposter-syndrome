import { sampleSkills } from "./common/sampleSkills";

function Skills() {
  return (
    <ul className="flex flex-row gap-2 flex-wrap list-none">
      {sampleSkills.map((skill, i) => (
        <li
          key={`Skill${i}`}
          className="min-w-fit max-w-full bg-gray-700 rounded-2xl px-4 py-1"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default Skills;
