export interface Task {
  id: string;
  level: string;
  title: string;
  questionText: string;
  categories: string[];
  cost: string;
  rewardText: string;
  type: string;
}

export interface CompletedTask {
  id: string;
  homeID: string;
  questionID: string;
  answer: string;
}
