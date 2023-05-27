export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((part: string): number => {
    return parseInt(part);
  });
  // ["day","month","year"]

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
