/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Dashboard from "../../components/Dashboard";
import Description from "../../components/Description";
import Heading from "../../components/Heading";
import Profile from "../../components/Profile";
import ProfileDropdown from "../../components/ProfileDropdown";
import Skills from "../../components/Skills";

function profile() {
  const router = useRouter();
  const { profileUsername } = router.query;

  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-28 relative">
      <ProfileDropdown />
      <Profile />
      <Heading variant="h1" content="Dashboard" customId="dashboard" />
      <Dashboard />
      <Heading variant="h1" content="Description" customId="description" />
      <Description />
      <Heading variant="h1" content="Skills" customId="skills" />
      <Skills />
    </div>
  );
}

export default profile;
