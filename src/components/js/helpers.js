document.querySelector(".readMore").addEventListener("click", expandBio);

function expandBio() {
  var dots = document.querySelector(".dots");
  var fullBio = document.querySelector(".fullBio");
  var readMore = document.querySelector(".readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore.innerHTML = "Read more";
    fullBio.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore.innerHTML = "Read less";
    fullBio.style.display = "inline";
  }
}
