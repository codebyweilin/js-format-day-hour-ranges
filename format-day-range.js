const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekendDays = ['Saturday', 'Sunday'];
const allDays = [...workingDays, ...weekendDays];
const formatDayRanges = (data) =>
  allDays
    .reduce((acc, day) => {
      const dayData = data.find((d) => d.day === day);
      const hours = dayData ? `${dayData.from} - ${dayData.to}` : 'Closed';
      if (acc.length && acc[acc.length - 1].hours === hours) {
        acc[acc.length - 1].days.push(day);
      } else {
        acc.push({ days: [day], hours });
      }
      return acc;
    }, [])
    .map(({ days, hours }) => {
      if (days.length === 1) return `${days[0]}: ${hours}`;
      if (days.length === 7) return `Everyday: ${hours}`;
      if (workingDays.every((day) => days.includes(day)))
        return 'Weekdays: ' + hours;
      if (weekendDays.every((day) => days.includes(day)))
        return 'Weekend: ' + hours;
      return `${days[0]} - ${days[days.length - 1]}: ${hours}`;
    });
// Given the sample input from the problem definition
const result = formatDayRanges(inputData);
// [
//   'Monday: Closed',
//   'Tuesday - Friday: 09:00 - 17:00',
//   'Saturday: 10:00 - 14:00',
//   'Sunday: Closed'
// ]