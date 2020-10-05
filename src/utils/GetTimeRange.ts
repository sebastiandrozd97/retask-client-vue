export const times = (): string[] => {
  let times: string[] = [];
  const hours = [...Array(24).keys()];
  const quarterHours = ['00', '15', '30', '45'];

  hours.forEach(hour => {
    quarterHours.forEach(time => {
      if (hour < 10) {
        times = [...times, `0${hour}:${time}`];
      } else {
        times = [...times, `${hour}:${time}`];
      }
    });
  });

  return times;
};
