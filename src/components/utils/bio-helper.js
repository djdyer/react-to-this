export default function expandBio() {
  document.querySelector(".readMore").addEventListener("click", expandBio);

  const dots = document.querySelector(".dots");
  const fullBio = document.querySelector(".fullBio");
  const readMore = document.querySelector(".readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore.innerHTML = "Read more";
    fullBio.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore.innerHTML = "Read less";
    fullBio.style.display = "inline";
  }
  // function collapseBio() {
  //   if (dots.style.display === "none") {
  //     dots.style.display = "none";
  //     readMore.innerHTML = "Read less";
  //     fullBio.style.display = "inline";
  //   } else {
  //     dots.style.display = "inline";
  //     readMore.innerHTML = "Read more";
  //     fullBio.style.display = "none";
  //   }
}
