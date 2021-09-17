/********************************************************************
 * Date Array to dd/mm/yyyy
 *
 * Conversion according to local settings
 *
 *
 * ------------------------------------------------------------------
 *
 * IMPORTANT :
 * - for a complete conversion of an Array String you must fill in the global
 * variable glideDateTimeFormat with the format (short, medium or long).
 * - for a conversion of a Date-Time column, use the 'short' format
 *
 */
window.function = function (
  array,
  arrayformat,
  lang,
  weekday,
  year,
  month,
  day,
  hour,
  minute,
  second,
  timeZoneName,
  era
) {
  if (array === undefined) return;

  let lg = "";
  if (lang === undefined || lang.value == "") {
    lg = navigator.language;
  } else lg = lang.value;

  weekday = weekday.value ?? "";
  year = year.value ?? "";
  month = month.value ?? "";
  day = day.value ?? "";
  hour = hour.value ?? "";
  minute = minute.value ?? "";
  second = second.value ?? "";
  timeZoneName = timeZoneName.value ?? "";
  era = era.value ?? "";

  let ops = new Map();
  if (weekday) ops.set("weekday", weekday);
  if (year) ops.set("year", year);
  if (month) ops.set("month", month);
  if (day) ops.set("day", day);
  if (hour) ops.set("hour", hour);
  if (minute) ops.set("minute", minute);
  if (second) ops.set("second", second);
  if (timeZoneName) ops.set("timeZoneName", timeZoneName);
  if (era) ops.set("ear", era);

  const obj = Object.fromEntries(ops);

  //let x = glide2Date(date.value, "short");

  let arrDate = array.value;

  glideDateTimeFormat = "short";

  arrayformat = arrayformat.value ?? "";
  if (arrayformat != "") glideDateTimeFormat = arrayformat;

  let arrayConv = [];
  // !!!!!!! TEST converting Array String with Date
  if (arrDate != undefined) {
    arrDate = arrDate.map((dt) => {
      let x = glide2Date(dt, glideDateTimeFormat);
      //let conv = x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
      let conv = x.toLocaleString(lg, obj);
      //arrayConv.push(conv);
      return conv;
    });
  }

  // !!!!!!!! RETURN ARRAY
  return arrDate;
};
