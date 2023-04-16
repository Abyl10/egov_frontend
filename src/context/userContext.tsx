import { IUser } from '@/ts/types';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const initialUserState: IUser = {
  first_name: '',
  last_name: '',
  role: 0,
  token: '',
  id: 0,
};

type ContextType = {
  user: IUser;
  setUser: (user: IUser) => void;
  logout: () => void;
};

export const UserContext = createContext<ContextType>({
  user: initialUserState,
  setUser: () => null,
  logout: () => null,
});

export const useUserContext = () => useContext(UserContext);

interface IProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : initialUserState;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const logout = () => {
    setUser(initialUserState);
  };

  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>;
};
