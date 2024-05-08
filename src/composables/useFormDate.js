export const formatDate = (date, format = "yyyy-MM-dd") => {
  const d = new Date(date);
  let year = d.getFullYear();
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();

  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  return format.replace("yyyy", year).replace("MM", month).replace("dd", day);
};
