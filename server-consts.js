const MAX_DISTANCE = 10000;
const TYPES_OF_ACTIVITY = ['Skiing', 'Running', 'Cycling', 'Walking'];

const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};
const generateUserData = (count) => {
  const newData = new Array(count).fill('').map((el) => {
    const day = Math.floor(Math.random() * new Date().getDate()) + 1;
    const month = Math.round(Math.random() * new Date().getMonth());
    const year = new Date().getFullYear() - Math.round(Math.random() * 10);
    const id = generateUniqueId();
    return {
      date: `${day < 10 ? `0${day}` : { day }}/${
        month < 10 ? `0${month}` : { month }
      }/${year}`,
      type:
        TYPES_OF_ACTIVITY[Math.floor(Math.random() * TYPES_OF_ACTIVITY.length)],
      distance: Math.floor(Math.random() * MAX_DISTANCE),
      id,
    };
  });

  return newData;
};

module.exports = {
  MAX_DISTANCE,
  TYPES_OF_ACTIVITY,
  generateUserData,
};
