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

async function fetchImage() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (response.status === 200) {
    let data = await response.json;
    console.log(data);
    document.getElementById("poster-image").src = "${data.message}";
  } else {
    document.getElementById("poster-image").src = "./puppies.jpg";
  }
}

fetchImage();
