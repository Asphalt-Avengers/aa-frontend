export const showInMap = (geom: string): void => {
  const [latitude, longitude] = geom.split(',').map(Number);
  window.open(`https://maps.google.com?q=${latitude},${longitude}`);
};
