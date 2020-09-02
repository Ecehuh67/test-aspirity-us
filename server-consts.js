const MAX_DISTANCE = 10000;
const TYPES_OF_ACTIVITY = ['Skiing', 'Running', 'Cycling', 'Walking'];
const generateUserData = (count) => {
  const newData = new Array(count).fill('').map((el) => {
    const day = Math.round(Math.random() * new Date().getDate());
    const month = Math.round(Math.random() * new Date().getMonth());
    const year = new Date().getFullYear() - Math.round(Math.random() * 500);
    return {
      date: `${day < 10 ? `0${day}` : { day }}/${
        month < 10 ? `0${month}` : { month }
      }/${year}`,
      type:
        TYPES_OF_ACTIVITY[Math.floor(Math.random() * TYPES_OF_ACTIVITY.length)],
      distance: Math.floor(Math.random() * MAX_DISTANCE),
    };
  });

  return newData;
};

module.exports = {
  MAX_DISTANCE,
  TYPES_OF_ACTIVITY,
  generateUserData,
};
