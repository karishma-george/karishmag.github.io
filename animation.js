function myFunction() {
  var x = document.getElementById("navigation-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.width = "100vw";
  }
}
