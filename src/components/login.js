import React, {useContext} from "react";
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase/compat";

export const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
    }

  return (
    <Container>
      <Grid
        container
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: window.innerHeight - 50
        }}>
          <Grid
            style={{
                width: 400,
                background: 'gray',
                direction: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            container
          >
            <Box p={5}>
                <Button onClick={login} variant={'outlined'}>Login by Google</Button>
            </Box>
          </Grid>
      </Grid>
    </Container>
  );
}
