import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface AppState {
  appState: string;
  setAppState: Dispatch<SetStateAction<string>> | (() => void);
}

const initialState: AppState = { appState: 'Auth', setAppState: () => {} }; // eslint-disable-line @typescript-eslint/no-empty-function

export const AppContext = createContext<AppState>(initialState);

export const AppProvider: React.FC = ({ children }) => {
  const [appState, setAppState] = useState(initialState.appState);

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
