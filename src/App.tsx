import React from 'react';
import { UserProvider } from './UserContext';
import List from './components/List';
import AddUser from './components/AddUser';
import { CssBaseline, Container, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <UserProvider>
      <CssBaseline />
      <Container>
        <Typography variant="h3" gutterBottom>
          User Management App
        </Typography>
        <AddUser />
        <List />
      </Container>
    </UserProvider>
  );
};

export default App;
