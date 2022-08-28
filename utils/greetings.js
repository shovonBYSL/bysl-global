// show greetings
let timeOfDay;
const date = new Date();
const hours = date.getHours();
if (hours >= 5 && hours < 12) {
  timeOfDay = "Morning";
} else if (hours >= 12 && hours < 17) {
  timeOfDay = "Afternoon";
} else if (hours >= 17 && hours < 20) {
  timeOfDay = "Evening";
} else {
  timeOfDay = "Night";
}
export { timeOfDay };
