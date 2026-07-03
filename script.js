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
  xp += (mouseX - xp) / 5;
  yp += (mouseY - yp) / 5;

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

const video = document.getElementById('animVideo');
const preloader = document.getElementById('preloader');

if (preloader) {
    if (sessionStorage.getItem('animationJouee') === 'true') {
        document.body.classList.remove('no-scroll');
        document.body.classList.add('video-ended');
        preloader.remove();
    } else {
        if (video) {
            const anticipation = 1; 
            let transitionDeclenchee = false;

            video.addEventListener('timeupdate', () => {
                if (!transitionDeclenchee && video.duration > 0 && (video.duration - video.currentTime) <= anticipation) {
                    transitionDeclenchee = true;
                    preloader.style.opacity = '0';
                    document.body.classList.remove('no-scroll');
                    document.body.classList.add('video-ended');
                    sessionStorage.setItem('animationJouee', 'true');
                    setTimeout(() => {
                        preloader.remove();
                    }, 400);
                }
            });
        }
    }
}

const themeToggle = document.getElementById('themeToggle');

  if (localStorage.getItem('theme') === 'light') {
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      localStorage.setItem('theme', 'light');
      console.log("light")
    } else {
      localStorage.setItem('theme', 'dark');
            console.log("dark")

    }
  });