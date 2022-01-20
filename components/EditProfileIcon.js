import Link from "next/link";

function EditProfile({ username }) {
  return (
    <Link href={`/${username}/edit`}>
      <a className="text-right fixed top-14 right-14 cursor-pointer sm:right-16 md:right-20 lg:right-40 z-30 inline-flex justify-center p-2 text-2xl font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <EditIcon />
      </a>
    </Link>
  );
}

function EditIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
    </svg>
  );
}

export default EditProfile;
