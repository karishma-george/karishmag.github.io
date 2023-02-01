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

fetchImage();

async function fetchImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  let dog_json = await response.json();
  document.getElementById("poster-image").src = dog_json.message;
  console.log(dog_json);
}
