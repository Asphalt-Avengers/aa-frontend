export const formattedDate = (date: string | Date): string => {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
