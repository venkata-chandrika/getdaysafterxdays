var addDays = require("date-fns/addDays");
let getDaysAfterxDays = (days) => {
  const dateFormat = addDays(new Date(2020, 7, 22), days);
  return `${datFormat.getDate()}-${
    datFormat.getMonth() + 1
  }-${datFormat.getFullYear()}`;
};
module.exports = getDaysAfterxDays;
