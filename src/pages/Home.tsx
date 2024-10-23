import * as React from 'react';
import { Container, Box } from '@mui/material';

import { Helmet } from 'react-helmet-async';
import { CONFIG } from '../config-global';
export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title> {`Home - ${CONFIG.appName}`}</title>
      </Helmet>
      <Container maxWidth="md">
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          Hello World
        </Box>
      </Container>
    </>
  );
};
