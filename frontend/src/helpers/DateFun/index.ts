/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-unreachable */
import date from 'date-and-time';

export const getMonthNow = (month:string) => {
  switch (month) {
    case 'January':
      return 'январь';
      break;
    case 'February':
      return 'февраль';
      break;
    case 'March':
      return 'март';
      break;
    case 'April':
      return 'апрель';
      break;
    case 'May':
      return 'май';
      break;
    case 'June':
      return 'июнь';
      break;
    case 'July':
      return 'июль';
      break;
    case 'August':
      return 'август';
      break;
    case 'September':
      return 'сентябрь';
      break;
    case 'October':
      return 'октябрь';
      break;
    case 'November':
      return 'ноябрь';
      break;
    case 'December':
      return 'декабрь';
      break;
  }
};

export const getDateNow = () => {
  const now = new Date();
  const day = date.format(now, 'D');
  const month = getMonthNow(date.format(now, 'MMMM'));
  const year = date.format(now, 'YYYY');
  const result = `${day} ${month} ${year}`;

  return result;
};
