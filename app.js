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

    document.getElementById("modalForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const course = document.getElementById("course").value;
        
        const botToken = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
        const chatId = "-4095221548";
        
        const message = `Новая заявка!%0AИмя: ${name}%0AТелефон: ${phone}%0AКурс: ${course}`;
        
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log("Ваша заявка отправлена!");
                    modal.style.display = "none";
                } else {
                    console.log("Ошибка при отправке. Попробуйте еще раз.");
                }
            })
            .catch(error => {
                console.error("Ошибка:", error);
                console.log("Ошибка при отправке. Попробуйте еще раз.");
            });
    });
});

// Функция отправки данных в Telegram
function sendToTelegram(message) {
    const botToken = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
    const chatId = "-4095221548";
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Ваша заявка отправлена!");
            } else {
                alert("Ошибка при отправке. Попробуйте еще раз.");
            }
        })
        .catch(error => {
            console.error("Ошибка:", error);
            alert("Ошибка при отправке. Попробуйте еще раз.");
        });
}

document.getElementById("modalForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    
    const message = `Новая заявка!%0AИмя: ${name}%0AТелефон: ${phone}%0AКурс: ${course}`;
    sendToTelegram(message);
    modal.style.display = "none";
});

// Отправка номера телефона из блока conaction
document.querySelector(".input-container button").addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-input").value;
    if (phoneInput.trim() !== "") {
        const message = `Запрос на запись!%0AТелефон: ${phoneInput}`;
        sendToTelegram(message);
    } else {
        alert("Введите номер телефона!");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollButtons = document.querySelectorAll(".phone__button");
    const targetSection = document.querySelector(".conaction");

    if (scrollButtons.length > 0 && targetSection) {
        scrollButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const phoneButton = document.querySelector(".phone__button");

    if (phoneButton) {
        phoneButton.addEventListener("click", function () {
            window.location.href = "tel:+380952502171";
        });
    }
});
