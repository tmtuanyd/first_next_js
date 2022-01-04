import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";

const login = () => {
  return (
    <Box p={3}>
      <Head>
        <title>Sign in page</title>
      </Head>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Box>
          <Typography>Sign in</Typography>
        </Box>
        <form>
          <Box p={3} display={"flex"} flexDirection={"column"}>
            <TextField label="Email" type={"email"} variant="outlined" />
            <TextField label="Password" type={"password"} variant="outlined" />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            <Typography>
              You do not have account?{" "}
              <NextLink href={"/register"} passHref>
                <Link color="error">Register</Link>
              </NextLink>
            </Typography>
          </Box>
        </form>
      </Grid>
    </Box>
  );
};

export default login;
