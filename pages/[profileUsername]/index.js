/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import Dashboard from "../../components/dashboard./Dashboard";
import Profile from "../../components/profile/Profile";

function profile() {
  const router = useRouter();
  const { profileUsername } = router.query;

  return (
    <div className="mx-8">
      <Profile />
      <Dashboard />
    </div>
  );
}

export default profile;
