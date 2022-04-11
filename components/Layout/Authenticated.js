import Head from "next/dist/shared/lib/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
// import SignOutIcon from "@mui/icons-material/Logout";
// import ProfileIcon from "@mui/icons-material/ProfileIcon";
import { SignOut } from "../../services/firebase";
import { Profile } from "../../services/firebase";
const Authenticated = ({ children, title }) => {
  const defaultTitle = "Netflix";
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flex: 1 }}>Bioskop</Typography>
          <ButtonBase onClick={Profile}>
            <Typography sx={{ ml: 3 }}>Profile</Typography>
          </ButtonBase>
          <ButtonBase onClick={SignOut}>
            {/* <SignOutIcon /> */}
            <Typography sx={{ ml: 3 }}>Sign Out</Typography>
          </ButtonBase>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ pt: "64px" }}>
        <Container maxWidth="md">{children}</Container>
      </Box>
    </>
  );
};

export default Authenticated;
