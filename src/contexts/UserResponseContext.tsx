import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface UserResponseState {
  userResponseState: {
    items: {
      id: string;
      userID: string;
      questionID: string;
      answer: string;
      createdAt: string;
    }[];
  };
  setUserResponseState:
    | Dispatch<
        SetStateAction<{
          items: {
            id: string;
            userID: string;
            questionID: string;
            answer: string;
            createdAt: string;
          }[];
        }>
      >
    | (() => void);
}

// TODO: Copied over from ResponseContext so need to change json values
const initialState: UserResponseState = {
  userResponseState: {
    items: [],
  },
  setUserResponseState: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

export const UserResponseContext =
  createContext<UserResponseState>(initialState);

export const ResponseProvider: React.FC = ({ children }) => {
  const [userResponseState, setUserResponseState] = useState(
    initialState.userResponseState,
  );

  return (
    <UserResponseContext.Provider
      value={{
        userResponseState,
        setUserResponseState,
      }}
    >
      {children}
    </UserResponseContext.Provider>
  );
};
