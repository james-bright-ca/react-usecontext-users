import React, { createContext, useState, FC, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
}

interface UserContextType {
  users: User[];
  addUser: (name: string) => void;
  deleteUser: (id: number) => void;
  modifyUser: (id: number, name: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode; // Add this to type the children
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);

  const addUser = (name: string) => {
    setUsers((prev) => [...prev, { id: prev.length + 1, name }].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const modifyUser = (id: number, name: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, name } : user)).sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, modifyUser }}>
      {children}
    </UserContext.Provider>
  );
};
