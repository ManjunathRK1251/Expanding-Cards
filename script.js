// const panels =  document.querySelector('.panel') --> we cant do this since there are many panels and this line will only select the first panel
const panels = document.querySelectorAll(".panel"); //this stores all the panels in a NodeList

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active"); //panel.classList gives the list of classs and  panel.classList.add("active") adds the active class to given class
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
