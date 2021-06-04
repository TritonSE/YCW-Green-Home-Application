import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { HomeOwner } from '../models';

interface UserState {
  userState: {
    _deleted: boolean | null;
    _lastChangedAt: number;
    _version: number;
    createdAt: string;
    displayName: string;
    homes: {
      items: HomeOwner[];
      nextToken: string;
      startedAt: string;
    };
    id: string;
    owner: string;
    updatedAt: string;
    username: string;
  };
  setUserState:
    | Dispatch<
        SetStateAction<{
          _deleted: boolean | null;
          _lastChangedAt: number;
          _version: number;
          createdAt: string;
          displayName: string;
          homes: {
            items: HomeOwner[];
            nextToken: string;
            startedAt: string;
          };
          id: string;
          owner: string;
          updatedAt: string;
          username: string;
        }>
      >
    | (() => void);
}

const initialState: UserState = {
  userState: {
    _deleted: null,
    _lastChangedAt: 0,
    _version: 1,
    createdAt: '',
    displayName: '',
    homes: {
      items: [],
      nextToken: '',
      startedAt: '',
    },
    id: '',
    owner: '',
    updatedAt: '',
    username: '',
  },
  setUserState: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

export const UserContext = createContext<UserState>(initialState);

export const UserProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState(initialState.userState);

  return (
    <UserContext.Provider
      value={{
        userState,
        setUserState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
