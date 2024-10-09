import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { TextField, Typography, Box } from '@mui/material';

interface EditUserProps {
  user: {
    id: number;
    name: string;
  };
  onEditStart: () => void;
  onEditEnd: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ user, onEditStart, onEditEnd }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const { modifyUser } = userContext;

  const handleSave = () => {
    if (newName.trim()) {
      modifyUser(user.id, newName);
      setIsEditing(false);
      onEditEnd();  // Notify parent that editing has ended
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };

  const handleBlur = () => {
    handleSave();
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
      {isEditing ? (
        <TextField
          variant="outlined"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          autoFocus
          fullWidth // Ensures that the input field takes up available space
          inputProps={{ style: { height: '40px', padding: '10px' } }} // Sets height of input for consistency
        />
      ) : (
        <Typography
          variant="body1"
          onClick={() => {
            setIsEditing(true);
            onEditStart();
          }}
          sx={{ cursor: 'pointer', width: '100%' }}  // Takes up full width
        >
          {user.name}
        </Typography>
      )}
    </Box>
  );
};

export default EditUser;
