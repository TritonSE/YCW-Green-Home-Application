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
    items: [
      {
        id: '8ae8a92b-b8ea-4079-b38c-7332bdcdf76c',
        homeID: '8fd43b46-64ea-40a4-a8ba-11ff54e11d2b',
        questionID: '75363cf2-bac5-47ec-baec-acd733614052',
        answer: 'No',
        createdAt: '2021-05-17T16:51:26.097Z',
      },
      {
        id: '201dfea5-c27f-4f72-bace-de5ce3fcf356',
        homeID: '8fd43b46-64ea-40a4-a8ba-11ff54e11d2b',
        questionID: '622ff926-3055-42f9-abe0-aaa8bcea3798',
        answer: 'Yes',
        createdAt: '2021-05-17T17:21:05.842Z',
      },
    ],
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
