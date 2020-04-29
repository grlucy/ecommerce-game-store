import moment from "moment";

const dateIsToday = (date) => {
  const today = new Date();
  return today.toDateString() === date.toDateString();
}

export const disabledHours = (date) => {

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

  let hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  return hours.filter((hour) => {
    return (hour < openHours[date.getDay()].open ||
    hour >= openHours[date.getDay()].close ||
    (dateIsToday(date) && hour < currentHour + 2));
  });
}

export const firstAvailableDay = () => {
  let date = new Date();
  if (disabledHours(date).length === 24) {
    date.setDate((date.getDate() + 1));
  }
  return date;
}

export const firstAvailableTime = (date) => {
  const disabled = disabledHours(date);
  for ( let i = 0; i < 24; i++ ) {
    if ( disabled.indexOf(i) === -1 ) {
      return moment().hour(i).minute(0);
    }
  } 
}

