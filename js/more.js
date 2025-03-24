
window.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".idOpenSidebar").forEach((button, index) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".idSidebar")[index].classList.toggle("open");
    });
});

document.querySelectorAll(".idCloseSidebar").forEach((button, index) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".idSidebar")[index].classList.remove("open");
    });
document.getElementById("prev").addEventListener("click", () => {
    document.querySelectorAll(".idSidebar").forEach((sidebar) => {
        sidebar.classList.remove("open");
    });
});

document.getElementById("next").addEventListener("click", () => {
    document.querySelectorAll(".idSidebar").forEach((sidebar) => {
        sidebar.classList.remove("open");
    });
});
});
});




  
  