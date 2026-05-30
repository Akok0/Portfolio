let xp = 0, mouseX = 0;
let yp = 0, mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const projects = document.querySelectorAll(".project");

let activeFloatingPreview = null; 

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  xp += (mouseX - xp) / 15;
  yp += (mouseY - yp) / 15;

  if (cursorFollower) {
    cursorFollower.style.left = xp + "px";
    cursorFollower.style.top = yp + "px";
  }

  if (activeFloatingPreview && activeFloatingPreview.classList.contains("is-visible")) {
    activeFloatingPreview.style.transform = `translate(${mouseX + 20}px, ${mouseY + 20}px)`;
  }

  requestAnimationFrame(animateCursor);
}

animateCursor();

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  
  document.addEventListener("mouseover", (e) => {
    const project = e.target.closest(".project");
    if (project) {
      const myFloatingPreview = project.querySelector(".project__menu-floating");
      if (myFloatingPreview) {
        myFloatingPreview.classList.add("is-visible");
        activeFloatingPreview = myFloatingPreview;
      }
    }
  });

  document.addEventListener("mouseout", (e) => {
    const project = e.target.closest(".project");
    if (project && !project.contains(e.relatedTarget)) {
      const myFloatingPreview = project.querySelector(".project__menu-floating");
      if (myFloatingPreview) {
        myFloatingPreview.classList.remove("is-visible");
        activeFloatingPreview = null;
      }
    }
  });
}