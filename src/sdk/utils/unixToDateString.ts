function unixToDateString(unix: number): string {
  const date = new Date(unix * 1000);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export default unixToDateString;
