const convertTime = {
  hourToMinutes: (hourString: string): number => {
    const [hour, minutes] = hourString.split(":").map(Number);
    const converted = hour * 60 + minutes;
    return converted;
  },
  minutesToHour: (minutesAmount: number): string => {
    const hour = Math.floor(minutesAmount / 60).toString();
    const minutes = (minutesAmount % 60).toString();
    return `${hour.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  },
};

export default convertTime;
