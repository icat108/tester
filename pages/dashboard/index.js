import withProtected from "../../hoc/withProtected";
import AuthLayout from "../../components/Layout/Authenticated";
import Image from "next/image";
import Box from "@mui/material/Box";

const Dashboard = () => {
  // const user = useUser();
  // const { email, uid } = user;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.4)",
          backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.6) 0,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0.8) 100%
          )`,
        },
      }}
    >
      <Image
        priority
        src="/__images/backdrop.jpg"
        layout="fill"
        objectFit="cover"
        alt="Backdrop Netflix"
      />
      {/* <Profile /> */}
      <AuthLayout />
    </Box>
  );
};

export default withProtected(Dashboard);
