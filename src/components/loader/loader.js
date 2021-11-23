import React, {useContext} from "react";
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../../index";
import styles from './loader.css'

export const Loader = () => {

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
                direction: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            container
          >
              <div className="lds-ring"><div>
              </div>
                  <div>

                  </div>
                  <div>

                  </div>
                  <div>

                  </div>
              </div>
          </Grid>
      </Grid>
    </Container>
  );
}
