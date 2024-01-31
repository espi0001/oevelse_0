// Henter det aktuelle timetallet
var time = new Date().getHours();

// Tjekker hvilken tidsperiode det er og udskriver passende besked
if (time >= 5 && time < 10) {
  console.log("Godmorgen");
} else if (time >= 10 && time < 18) {
  console.log("Goddag");
} else if (time >= 18 && time < 24) {
  console.log("Godaften");
} else {
  console.log("Godnat");
}
