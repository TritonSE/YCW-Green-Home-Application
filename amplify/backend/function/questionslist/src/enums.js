// Map of sheet values to enums in database
const Difficulty = {
  'Beginner': 'Beginner',
  'Intermediate': 'Intermediate',
  'Expert': 'Advanced',
}

const Cost = {
  '$': 'ONE',
  '$$': 'TWO',
  '$$$': 'THREE',
  '$$$$': 'FOUR',
}

const Tag = {
  'Energy': 'ENERGY',
  'Resiliency': 'RESILIENCY',
  'Water': 'WATER',
  'Health': 'HEALTH',
  'Materials': 'MATERIALS',
  'Embodied Carbon': 'EMBODIED_CARBON'
}

const QuestionType = {
  'Home Improvement': 'HOME_IMPROVEMENT',
  'Behavioral': 'GREEN_LIFESTYLE', //TODO: change this once measure list is updated
}

const textToTag = (row) => {
  const tags = row.split(', ');
  return tags.map((tag) => Tag[tag]);
}

export { Cost, Tag, QuestionType, Difficulty, textToTag };