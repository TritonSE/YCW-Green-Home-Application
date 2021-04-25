const toProperCase = (str: string): string => {
  return str[0] + str.slice(1).toLowerCase();
};

export default toProperCase;
