module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!'
  };
  try {
    date.getTime();

  } catch (err) {
    throw new Error (err);
  };
  return takeSeasion(date);

};
function takeSeasion (date) {
  switch (date.getMonth()) {
    case 2:
      case 3:
        case 4:
          return 'spring';
    case 5:
      case 6:
        case 7:
          return 'summer';
    case 8:
      case 9:
        case 10:
          return 'autumn';
    case 11:
      case 0:
        case 1:
          return 'winter';      

  };
};
