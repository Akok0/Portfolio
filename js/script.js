document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');
    let currentIndex = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            project.classList.toggle('active', i === index);
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        showProject(currentIndex);
    });

    showProject(currentIndex);
});






document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');
    const dotsContainer = document.querySelector('.dots');
    let currentIndex = 0;

    // Générer les points selon le nombre de projets
    projects.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = index; // On stocke l'index dans l'attribut data-index
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function showProject(index) {
        projects.forEach((project, i) => {
            project.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        showProject(currentIndex);
    });

    // Ajoute un événement au clic sur un point pour aller directement à l'image correspondante
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.dataset.index);
            showProject(currentIndex);
        });
    });

    showProject(currentIndex);
});


