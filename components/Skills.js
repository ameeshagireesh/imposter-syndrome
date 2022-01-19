import { sampleSkills } from "./common/sampleSkills";

function Skills() {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {sampleSkills.map((skill, i) => (
        <div
          key={`Skill${i}`}
          className="min-w-fit max-w-full bg-gray-700 rounded-2xl px-4 py-1"
        >
          <p>{skill}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
