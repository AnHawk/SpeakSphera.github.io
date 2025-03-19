document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");

    function reveal() {
        let windowHeight = window.innerHeight;
        let elementTop = heroSection.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            heroSection.style.opacity = "1";
            heroSection.style.transform = "translateY(0)";
        }
    }

    window.addEventListener("scroll", reveal);
});


document.addEventListener("DOMContentLoaded", function () {
    const advancet = document.querySelector(".advancet");
    const cards = document.querySelectorAll(".advancet__card");

    function reveal() {
        let windowHeight = window.innerHeight;
        let elementTop = advancet.getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            advancet.style.opacity = "1";
            advancet.style.transform = "translateX(-50%) translateY(0)";

            // Запускаем анимацию для карточек
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, index * 300); // Каждая карточка появляется с задержкой
            });
        }
    }

    window.addEventListener("scroll", reveal);
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".testimonial-slider", {
        loop: false, // Убираем зацикливание, чтобы не было пустых слайдов
        slidesPerView: 3, // Показывать 3 отзыва
        slidesPerGroup: 3, // Переключать сразу по 3 отзыва
        spaceBetween: 20, // Расстояние между отзывами
        autoplay: {
            delay: 5000, // Автопрокрутка каждые 3 секунды
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: { slidesPerView: 3, slidesPerGroup: 3 }, // ПК
            768: { slidesPerView: 2, slidesPerGroup: 2 }, // Планшет
            480: { slidesPerView: 1, slidesPerGroup: 1 }, // Телефон
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone-input");

    phoneInput.addEventListener("input", function (e) {
        let value = phoneInput.value.replace(/\D/g, ""); // Удаляем всё, кроме цифр
        let formattedValue = "+38 ";

        if (value.length > 2) {
            formattedValue += `(${value.substring(2, 5)}`;
        }
        if (value.length >= 5) {
            formattedValue += `) ${value.substring(5, 8)}`;
        }
        if (value.length >= 8) {
            formattedValue += `-${value.substring(8, 10)}`;
        }
        if (value.length >= 10) {
            formattedValue += `-${value.substring(10, 12)}`;
        }

        phoneInput.value = formattedValue;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".modal__close");
    const buttons = document.querySelectorAll(".courses__button");

    // Открытие модального окна
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "flex"; // Гарантируем показ модального окна
            setTimeout(() => modal.classList.add("show"), 10); // Даем время на обработку display
        });
    });

    // Функция закрытия модального окна
    function hideModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none"; // Скрываем после завершения анимации
        }, 300);
    }

    // Закрытие по кнопке "×"
    closeModal.addEventListener("click", hideModal);

    // Закрытие при клике вне формы
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            hideModal();
        }
    });
});

