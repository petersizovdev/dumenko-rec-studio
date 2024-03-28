document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("open");
    const closeModalBtn = document.getElementById("close");
    const modal = document.getElementById("Modal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("open1");
    const closeModalBtn = document.getElementById("close");
    const modal = document.getElementById("Modal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("open2");
    const modal = document.getElementById("Modal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    modal.addEventListener("click", function (event) {
        if (event.target.id === "close") {
            modal.style.display = "none";
        }
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-point');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки

            const targetId = this.getAttribute('href'); // Получаем атрибут href ссылки

            // Получаем верхнюю позицию целевого элемента относительно верха страницы
            const targetOffset = document.querySelector(targetId).offsetTop;

            // Плавно прокручиваем страницу к целевому элементу
            window.scrollTo({
                top: targetOffset,
                behavior: "smooth"
            });
        });
    });
});

