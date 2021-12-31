import React from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";

const Layout = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
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
          </Box>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography align="center">
          All rights reserved. Next Amazona.
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
