export interface Task {
  level: string;
  title: string;
  question: string;
  category: string;
  cost: string;
  rewardText: string;
}

export interface CompletedTask {
  id: string;
  homeID: string;
  questionID: string;
  answer: string;
}
