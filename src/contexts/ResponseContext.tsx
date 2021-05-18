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
        id: '574af3cc-68d6-4051-8be2-9a6353edaeba',
        homeID: '8fd43b46-64ea-40a4-a8ba-11ff54e11d2b',
        questionID: '97e9d4eb-0614-4548-961c-1fa30d5c0fca',
        createdAt: '2021-05-18T07:04:04.878Z',
        answer: 'Yes',
      },
      {
        id: '9bfb907e-e9db-470e-aaea-57dbd8e7db62',
        homeID: '8fd43b46-64ea-40a4-a8ba-11ff54e11d2b',
        questionID: 'fc866ac5-45e1-45f9-9c79-399e0f60020a',
        createdAt: '2021-05-18T07:08:38.573Z',
        answer: 'Yes',
      },
      {
        id: '261faeea-e646-4108-afed-c78cbe293d25',
        homeID: '8fd43b46-64ea-40a4-a8ba-11ff54e11d2b',
        questionID: '75363cf2-bac5-47ec-baec-acd733614052',
        createdAt: '2021-05-18T07:09:57.200Z',
        answer: 'No',
      },
      {
        id: '0e292c6f-3ac9-4acb-b8ac-fec3ccb0be44',
        homeID: '8fd43b46-64ea-40a4-a8ba-11ff54e11d2b',
        questionID: 'efc060cc-9fb2-4944-af32-eb213cb57361',
        createdAt: '2021-05-18T07:13:22.502Z',
        answer: 'No',
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
