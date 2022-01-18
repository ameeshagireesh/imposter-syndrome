import Image from "next/image";

function Profile() {
  return (
    <div id="userProfile" className="flex flex-row gap-4 md:gap-8 mx-auto justify-center mt-10">
      <div className="bg-gray-700 flex flex-col items-center p-2 md:p-4 rounded-xl gap-1 sm:gap-2">
        <div className="w-28 sm:w-32 md:w-40 lg:w-48">
          <Image
            className="rounded-xl"
            src="/profile.jpg"
            width="200px"
            height="200px"
            alt="profile image"
          />
        </div>
        <div>
          <p className="text-center text-sm sm:text-base md:text-xl">Contributions</p>
          <h1 className="font-bold text-center text-xl sm:text-2xl md:text-3xl">82738</h1>
        </div>
      </div>
      <div className="flex flex-col self-center">
        <div className="mb-2 flex flex-row items-center gap-2">
          <h1 className="font-bold text-lg md:text-3xl">Ameesha Gireesh</h1>
          <Image width={25} height={25} src="/levels/level5.svg" alt="level" />
        </div>
        <h2 className="text-base md:text-xl mb-4">ameeshagireesh</h2>
        <h2 className="text-sm md:text-xl text-gray-400 mb-4">
          Joined {new Date().getFullYear()}
        </h2>
        <div className="flex flex-row gap-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/socialIcons/twitter.svg"
              height={30}
              width={30}
              alt="twitter"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/socialIcons/github.svg"
              height={30}
              width={30}
              alt="twitter"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/socialIcons/linkedin.svg"
              height={30}
              width={30}
              alt="twitter"
            />
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/socialIcons/website.svg"
              height={30}
              width={30}
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
