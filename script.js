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