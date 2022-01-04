import React, { useContext } from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Box,
  ThemeProvider,
  CssBaseline,
  Switch,
  createTheme,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";

const Layout = ({ title, children }) => {
  const { state, dispatch } = useContext(Store);

  const { darkMode } = state;
  const classes = useStyles();
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeHandleChange = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href={"/"} passHref>
              <Link>
                <Typography variant="h5">amazona</Typography>
              </Link>
            </NextLink>
            <Box flexGrow={1} />
            <Box>
              <NextLink href={"/cart"} passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href={"/login"} passHref>
                <Link>Login</Link>
              </NextLink>
              <Switch checked={darkMode} onChange={darkModeHandleChange} />
            </Box>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer>
          <Typography align="center">
            All rights reserved. Next Amazona.
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
