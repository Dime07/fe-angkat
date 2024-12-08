export const getAcronim = (str: string) => {
  const arrString = str.split(" ");
  const twoWords = arrString.slice(0, 2);
  return twoWords.map((word) => word[0]).join("");
};
