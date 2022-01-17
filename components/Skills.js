const sampleSkills = [
  "Skill 1",
  "Skill 2",
  "Skill 3",
  "Skill 4",
  "Skill 5",
  "Skill 6",
  "Skill 7",
  "Skill 8",
  "Skill 9",
  "Skill 10",
  "Skill 11",
  "Skill 12",
  "Skill 13",
  "Skill 10",
  "Skill 11",
  "Skill 12",
  "Skill 13",
  "Skill 14 Skill 14 Skill 14",
];

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
