export const showInMap = (coordinates: any): void => {
  const [latitude, longitude] = coordinates;
  window.open(`https://maps.google.com?q=${latitude},${longitude}`);
};
