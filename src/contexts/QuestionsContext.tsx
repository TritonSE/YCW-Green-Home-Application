import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface QuestionState {
  questionState: {
    items: [
      {
        cost: string;
        categories: [string];
        questionText: string;
        level: string;
        id: string;
        title: string;
        rewardText: string;
      },
    ];
  };
  setQuestionState:
    | Dispatch<
        SetStateAction<{
          items: [
            {
              cost: string;
              categories: [string];
              questionText: string;
              level: string;
              id: string;
              title: string;
              rewardText: string;
            },
          ];
        }>
      >
    | (() => void);
}

const initialState: QuestionState = {
  questionState: {
    items: [
      {
        cost: '',
        categories: [''],
        questionText: '',
        level: '',
        id: '',
        title: '',
        rewardText: '',
      },
    ],
  },
  setQuestionState: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

export const QuestionContext = createContext<QuestionState>(initialState);

export const QuestionProvider: React.FC = ({ children }) => {
  const [questionState, setQuestionState] = useState(
    initialState.questionState,
  );

  return (
    <QuestionContext.Provider
      value={{
        questionState,
        setQuestionState,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
