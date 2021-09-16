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

window.function = function (array, arrayformat) {
  let arrDate = array.value;

  glideDateTimeFormat = "short";

  arrayformat = arrayformat.value ?? "";
  if (arrayformat != "") glideDateTimeFormat = arrayformat;

  let arrayConv = [];
  // !!!!!!! TEST converting Array String with Date
  if (arrDate != undefined) {
    arrDate = arrDate.map((dt) => {
      let x = glide2Date(dt, glideDateTimeFormat);
      let conv = x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
      //arrayConv.push(conv);
      return conv;
    });
  }

  // !!!!!!!! RETURN ARRAY
  return arrDate;
};
