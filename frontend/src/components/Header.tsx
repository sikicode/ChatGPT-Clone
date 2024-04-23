import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
    const auth = useAuth();
    return (
      <AppBar sx={{ backgroundColor: "transparent", position: "static", boxShadow: "none" }}>
          <Toolbar sx={{ display: "flex" }} >
              <Logo />
              <div>
                  {auth?.isLoggedIn ? (
                      <>
                          <NavigationLink bg="#00fffc" to="/chat" text="Go to Chat" textColor="black" />
                          <NavigationLink bg="#51538f" to="/" text="Log out" textColor="white" onClick={auth.logout} />
                      </>
                  ) : (
                      <>
                          <NavigationLink bg="#00fffc" to="/login" text="Login" textColor="black" />
                          <NavigationLink bg="#51538f" to="/signup" text="Sign up" textColor="white"/>
                      </>
                  ) };
              </div>
          </Toolbar>
      </AppBar>
    );
};

export default Header;