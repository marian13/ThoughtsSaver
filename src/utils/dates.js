import moment from 'moment';

export const now = () => moment().toISOString();

export const hoursAndMinutes = isoString => {
  if (!isoString) return '';

  const date = moment(isoString);

  const hours = date.hours().toString().padStart(2, '0');
  const minutes = date.minutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};
