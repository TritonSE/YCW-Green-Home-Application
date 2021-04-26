const toProperCase = (str: string): string => {
  return str[0] + str.slice(1).toLowerCase();
};

const CostTextToSymbol: { [key: string]: string } = {
  ONE: '$',
  TWO: '$$',
  THREE: '$$$',
};

export { toProperCase, CostTextToSymbol };
