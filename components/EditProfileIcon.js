import Link from "next/link";
import { EditIcon } from "./Icons";

function EditProfile({ username }) {
  return (
    <Link href={`/${username}/edit`}>
      <a className="text-right fixed top-14 right-14 cursor-pointer sm:right-16 md:right-20 lg:right-40 z-30 inline-flex justify-center p-2 text-2xl font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <EditIcon />
      </a>
    </Link>
  );
}

export default EditProfile;
