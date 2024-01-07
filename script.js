function rotateStjerne() {
  console.log("Function called");
  const stjerne = document.getElementById("Stjerne");
  stjerne.style.transition = "transform 1s ease-in-out";
  stjerne.style.transform = "rotate(360deg)";
}
