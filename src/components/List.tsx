import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { List as MUIList, ListItem, Box } from '@mui/material';
import Delete from './Delete';
import EditUser from './EditUser';

const List: React.FC = () => {
  const userContext = useContext(UserContext);
  const [editingUserId, setEditingUserId] = useState<number | null>(null); // Track which user is being edited

  if (!userContext) return null;

  const { users } = userContext;

  return (
    <MUIList>
      {users.map((user) => (
        <ListItem
          key={user.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '60px', // Set a fixed minimum height for each row
          }}
        >
          {/* Inline edit for user name */}
          <EditUser
            user={user}
            onEditStart={() => setEditingUserId(user.id)}   // Set editing user
            onEditEnd={() => setEditingUserId(null)}        // Clear editing user
          />

          {/* Control buttons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {/* Only show Delete button when not editing */}
            {editingUserId !== user.id && (
              <Delete userId={user.id} />
            )}
          </Box>
        </ListItem>
      ))}
    </MUIList>
  );
};

export default List;
