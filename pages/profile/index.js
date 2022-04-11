import withProtected from "../../hoc/withProtected";
import AuthLayout from "../../components/Layout/Authenticated";
import { useUser } from "../../context/user";

const Profile = () => {
  return <AuthLayout title="Profile">Profile</AuthLayout>;
};

export default withProtected(Profile);
