/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Dashboard from "../../components/Dashboard";
import Description from "../../components/Description";
import Heading from "../../components/Heading";
import Profile from "../../components/Profile";
import Skills from "../../components/Skills";

function profile() {
  const router = useRouter();
  const { profileUsername } = router.query;

  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-28">
      <Profile />
      <Heading variant="h1" content="Dashboard" />
      <Dashboard />
      <Heading variant="h1" content="Description" />
      <Description />
      <Heading variant="h1" content="Skills" />
      <Skills />
    </div>
  );
}

export default profile;
