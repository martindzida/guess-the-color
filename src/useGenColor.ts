export const getRandInt = (n: number) => Math.floor(Math.random() * n);

const useGenColor = () => {
  const hex = '0123456789ABCDEF';
  const colors: string[] = [];

  for (let i = 0; i < 3; i++) {
    const indices = [...Array(6)].map(() => getRandInt(16));
    colors.push(`#${indices.map(index => hex[index]).join('')}`);
  }
  return colors;
};

export default useGenColor;

