module.exports = {
  add(number1, number2) {
    return number1 + number2;
  },

  convertToJson(o) {
    return JSON.stringify({
      _id: o._id,
    });
  },

  isSelected(v1, v2) {
    return JSON.stringify(v1) == JSON.stringify(v2) ? 'selected' : '';
  },

  convertStringDate(d) {
    var dateObj = new Date(d);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return year + '-' + month + '-' + day;
  },
};
