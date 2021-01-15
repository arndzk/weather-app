import moment from 'moment-timezone';

const convertTimestampTime = (timestamp) => {
  let tz = moment.tz.guess();
  let time = moment.tz(timestamp * 1000, tz).format('HH:mm');
  return time;
};

const convertTimestampDate = (timestamp) => {
  const date = moment.unix(timestamp).format('DD/MM');
  return date;
};

export { convertTimestampTime, convertTimestampDate };
