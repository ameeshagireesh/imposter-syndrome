import { useState } from "react";
import { sampleProfileData } from "../../components/common/sampleProfileData";
import Heading from "../../components/Heading";
import { DeleteIcon, SaveIcon } from "../../components/Icons";
import MarkdownEditor from "../../components/MarkdownEditor";
import ProfileDropdown from "../../components/ProfileDropdown";

function Edit() {
  const [name, setName] = useState(sampleProfileData.name);
  const [username, setUsername] = useState(sampleProfileData.username);
  const [profilePictureURL, setProfilePictureURL] = useState(
    sampleProfileData.profilePictureURL
  );

  const [twitterURL, setTwitterURL] = useState(sampleProfileData.twitterURL);
  const [githubURL, setGithubURL] = useState(sampleProfileData.githubURL);
  const [linkedinURL, setLinkedinURL] = useState(sampleProfileData.linkedinURL);
  const [websiteURL, setWebsiteURL] = useState(sampleProfileData.websiteURL);

  const [markdownContent, setMarkdownContent] = useState(
    sampleProfileData.description
  );
  const [userSkills, setUserSkills] = useState(sampleProfileData.skills);

  const labelStyle =
    "bg-gray-800 text-sm pl-2 py-0.5 rounded-t-lg text-gray-300";
  const inputStyle =
    "bg-gray-700 bg-opacity-90 p-2 rounded-b-lg outline-none focus:bg-opacity-100 transition-all duration-100 ease-in-out placeholder:text-gray-500 placeholder:text-sm invalid:text-red-500 invalid:border-2 border-red-500";
  const sectionStyle = "flex flex-col mb-2";

  function addSkill(e) {
    if (e.charCode === 13) {
      setUserSkills([...userSkills, e.target.value]);
      e.target.value = "";
    }
  }

  function deleteSkill(index) {
    setUserSkills([...userSkills].filter((item, i) => i !== index));
  }

  function saveData(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-28 relative">
      <ProfileDropdown dropdownItems={dropdownItems} />
      <button
        type="submit"
        form="editProfileForm"
        className="text-right fixed top-14 right-14 cursor-pointer sm:right-16 md:right-20 lg:right-40 z-30 inline-flex justify-center p-2 text-2xl font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <SaveIcon />
      </button>
      <Heading variant="h1" content="Edit User Data" />
      <form id="editProfileForm" onSubmit={saveData}>
        <div>
          <Heading variant="h3" content="Profile" customId="editProfile" />
          <div className={sectionStyle}>
            <label htmlFor="name" className={labelStyle}>
              Full Name *
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              id="name"
              value={name}
              className={inputStyle}
              type="text"
              pattern="[a-zA-Z0-9 ]+"
              required
            />
          </div>
          <div className={sectionStyle}>
            <label htmlFor="username" className={labelStyle}>
              Username *
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter a unique username"
              id="username"
              value={username}
              className={inputStyle}
              type="text"
              pattern="[a-zA-Z0-9._-]+"
              required
            />
          </div>
          <div className={sectionStyle}>
            <label htmlFor="profilePictureURL" className={labelStyle}>
              Profile Picture URL
            </label>
            <input
              onChange={(e) => setProfilePictureURL(e.target.value)}
              placeholder="Enter an URL for profile picture"
              type="url"
              id="profilePictureURL"
              value={profilePictureURL}
              className={inputStyle}
            />
          </div>
        </div>
        <div>
          <Heading variant="h3" content="Socials" customId="editSocials" />
          <div className={sectionStyle}>
            <label htmlFor="twitterURL" className={labelStyle}>
              Twitter URL
            </label>
            <input
              onChange={(e) => setTwitterURL(e.target.value)}
              placeholder="Enter URL for Twitter handle"
              type="url"
              id="twitterURL"
              value={twitterURL}
              className={inputStyle}
            />
          </div>
          <div className={sectionStyle}>
            <label htmlFor="githubURL" className={labelStyle}>
              GitHub URL
            </label>
            <input
              onChange={(e) => setGithubURL(e.target.value)}
              placeholder="Enter URL for GitHub Profile"
              type="url"
              id="githubURL"
              value={githubURL}
              className={inputStyle}
            />
          </div>
          <div className={sectionStyle}>
            <label htmlFor="linkedinURL" className={labelStyle}>
              LinkedIn URL
            </label>
            <input
              onChange={(e) => setLinkedinURL(e.target.value)}
              placeholder="Enter URL for LinkedIn Profile"
              type="url"
              id="linkedinURL"
              value={linkedinURL}
              className={inputStyle}
            />
          </div>
          <div className={sectionStyle}>
            <label htmlFor="websiteURL" className={labelStyle}>
              Website URL
            </label>
            <input
              onChange={(e) => setWebsiteURL(e.target.value)}
              placeholder="Enter URL for Portfolio website"
              type="url"
              id="githubURL"
              value={websiteURL}
              className={inputStyle}
            />
          </div>
        </div>
      </form>
      <div className={sectionStyle}>
        <Heading variant="h3" content="Skills" customId="editSkills" />
        <ul className="flex flex-row gap-2 flex-wrap list-none mb-3">
          {userSkills.map((skill, index) => (
            <div key={`editSkill${index}`} className="flex ">
              <li className="min-w-fit max-w-full bg-gray-700 rounded-l-2xl pl-4 pr-2 py-1">
                {skill}
              </li>
              <div
                onClick={(e) => deleteSkill(index)}
                className="text-red-300 bg-gray-700 rounded-r-2xl pr-2 py-2 cursor-pointer"
              >
                <DeleteIcon />
              </div>
            </div>
          ))}
        </ul>
        <label className={labelStyle}>Add a skill</label>
        <input
          onKeyPress={(e) => addSkill(e)}
          placeholder="Press enter to add"
          className={inputStyle}
        />
      </div>
      <div className={sectionStyle}>
        <Heading
          variant="h3"
          content="Description"
          customId="editDescription"
        />
        <MarkdownEditor
          markdownContent={markdownContent}
          setMarkdownContent={setMarkdownContent}
        />
      </div>
    </div>
  );
}

const dropdownItems = [
  {
    title: "Edit profile",
    navigateTo: "#editProfile",
    activeIcon: null,
    inactiveIcon: null,
  },
  {
    title: "Edit socials",
    navigateTo: "#editSocials",
    activeIcon: null,
    inactiveIcon: null,
  },
  {
    title: "Edit skills",
    navigateTo: "#editSkills",
    activeIcon: null,
    inactiveIcon: null,
  },
  {
    title: "Edit description",
    navigateTo: "#editDescription",
    activeIcon: null,
    inactiveIcon: null,
  },
];

export default Edit;
