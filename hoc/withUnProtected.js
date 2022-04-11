import { useRouter } from "next/dist/client/router";
import { useUser } from "../context/user";
/*eslint-disable react/display-name */

const withUnProtected = (Pages) => {
  return (props) => {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (uid) {
      router.replace('/dashboard');
      return <></>;
    }
    return <Pages {...props} />;
  };
};
export default withUnProtected;
