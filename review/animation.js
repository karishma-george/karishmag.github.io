function myFunction() {
  let nav = document.getElementById("navigation-links");
  let header_element = document.getElementById("header-nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
    nav.style.flexDirection = "column";
    header_element.style["flex-wrap"] = "wrap";
  }
}
