import moment from "moment";

export const availableDays = () => {
  let date = moment();
  let available = [];
  if (availableHours(date).length > 0) {
    available.push(date);
  }
  for (let i = 1; i < 5; i++) {
    let d = moment();
    d.add(i, "days");
    available.push(d);
  }
  return available;
}

export const availableHours = (date) => {

  const openHours = [
    { //Sunday
      open: 11,
      close: 16
    },
    { //Monday
      open: 10,
      close: 18
    },
    { //Tuesday
      open: 10,
      close: 18
    },
    { //Wednesday
      open: 10,
      close: 18
    },
    { //Thursday
      open: 10,
      close: 18
    },
    { //Friday
      open: 10,
      close: 18
    },
    { //Saturday
      open: 10,
      close: 22
    }
  ];

  //create array of time objects with each hour and half hour of the day
  const times = [];
  for (let i = 0; i < 24; i++) {
    times.push({
      hours: i,
      mins: 0
    });
    times.push({
      hours: i,
      mins: 30
    });
  }
  let iterator = date.clone();
  iterator.set("minute", 0);
  iterator.set("second", 0);
  iterator.set("millisecond", 0);
  const currentDate = moment();

  return times.filter((time) => {
    return (time.hours >= openHours[iterator.day()].open &&
    time.hours < openHours[iterator.day()].close &&
    iterator.set("hour", time.hours).set("minute", time.mins).diff(currentDate, "hours", true) > 1);
  });
}


export const firstAvailablePickup = (date) => {
  if (availableHours(date).length === 0) {
    date.add(1, "day");
  }
  const available = availableHours(date);
  date.set("hour", available[0].hours);
  date.set("minute", available[0].mins);
  date.set("second", 0);
  date.set("millisecond", 0);

  return date;
}

