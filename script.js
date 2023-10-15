// JavaScript to toggle job descriptions
const jobDescriptions = document.querySelectorAll(".resume-list li p");

jobDescriptions.forEach((description) => {
  description.style.display = "none";

  description.parentElement.addEventListener("click", () => {
    if (description.style.display === "none") {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }
  });
});
