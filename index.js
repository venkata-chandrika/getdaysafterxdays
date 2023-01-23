var addDays = require("date-fns/addDays");
let getDaysAfterxDays = (days) => {
  const dateFormat = addDays(new Date(2020, 7, 22), days);
  return `${dateFormat.getDate()}-${
    dateFormat.getMonth() + 1
  }-${dateFormat.getFullYear()}`;
};
module.exports = getDaysAfterxDays;
