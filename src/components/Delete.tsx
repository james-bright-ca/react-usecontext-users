import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface DeleteProps {
  userId: number;
}

const Delete: React.FC<DeleteProps> = ({ userId }) => {
  const [open, showPopup] = useState(false);
  const userContext = useContext(UserContext);

  if (!userContext) return null;

  const { deleteUser } = userContext;

  const handleConfirmDelete = () => {
    deleteUser(userId);
    showPopup(false);
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={() => showPopup(true)}>
        Delete User
      </Button>
      <Dialog open={open} onClose={() => showPopup(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this user?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => showPopup(false)}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Delete;
