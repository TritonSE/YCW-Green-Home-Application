import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface ResponseState {
  responseState: {
    items: {
      id: string;
      homeID: string;
      questionID: string;
      answer: string;
      createdAt: string;
    }[];
  };
  setResponseState:
    | Dispatch<
        SetStateAction<{
          items: {
            id: string;
            homeID: string;
            questionID: string;
            answer: string;
            createdAt: string;
          }[];
        }>
      >
    | (() => void);
}

const initialState: ResponseState = {
  responseState: {
    items: [],
  },
  setResponseState: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

export const ResponseContext = createContext<ResponseState>(initialState);

export const ResponseProvider: React.FC = ({ children }) => {
  const [responseState, setResponseState] = useState(
    initialState.responseState,
  );

  return (
    <ResponseContext.Provider
      value={{
        responseState,
        setResponseState,
      }}
    >
      {children}
    </ResponseContext.Provider>
  );
};
