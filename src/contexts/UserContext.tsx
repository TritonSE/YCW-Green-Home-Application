import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface UserState {
  userState: {
    _deleted: null;
    _lastChangedAt: 0;
    _version: 1;
    createdAt: '';
    displayName: '';
    homes: {
      items: [];
      nextToken: null;
      startedAt: null;
    };
    id: '';
    owner: '';
    updatedAt: '';
    username: '';
  };
  setUserState:
    | Dispatch<
        SetStateAction<{
          _deleted: null;
          _lastChangedAt: 0;
          _version: 1;
          createdAt: '';
          displayName: '';
          homes: {
            items: [];
            nextToken: null;
            startedAt: null;
          };
          id: '';
          owner: '';
          updatedAt: '';
          username: '';
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
      nextToken: null,
      startedAt: null,
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
