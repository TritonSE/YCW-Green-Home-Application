// Map of sheet values to enums in database
const Levels = {
  'Starter': 'STARTER',
  'Intermediate': 'INTERMEDIATE',
  'Guru': 'GURU',
}

const Costs = {
  '$': 'ONE',
  '$$': 'TWO',
  '$$$': 'THREE',
}

const Categories = {
  'Energy': 'ENERGY',
  'Resiliency': 'RESILIENCY',
  'Water': 'WATER',
  'Health': 'HEALTH',
}

const textToCategory = (row) => {
  const categories = row.split(', ');
  return categories.map((category) => Categories[category]);
}

module.exports = { Costs, Categories, Levels, textToCategory };
