import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { TextField, Button, Box } from '@mui/material';

const AddUser: React.FC = () => {
  const [newUserName, setNewUserName] = useState('');
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const { addUser } = userContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUserName.trim()) {
      addUser(newUserName);
      setNewUserName('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
      <TextField
        label="New User"
        variant="outlined"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </Box>
  );
};

export default AddUser;
