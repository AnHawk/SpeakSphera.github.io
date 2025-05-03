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

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, index * 300);
            });
        }
    }

    window.addEventListener("scroll", reveal);
});

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".testimonial-slider", {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
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
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            480: { slidesPerView: 1, slidesPerGroup: 1 },
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone-input");

    phoneInput.addEventListener("input", function (e) {
        let value = phoneInput.value.replace(/\D/g, "");
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

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            modal.style.display = "flex";
            setTimeout(() => modal.classList.add("show"), 10);
        });
    });

    function hideModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    closeModal.addEventListener("click", hideModal);

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

// НОВОЕ МОДАЛЬНОЕ ОКНО ДЛЯ ЗАПИСИ
document.addEventListener("DOMContentLoaded", function () {
    const modalNew = document.getElementById("modal-new");
    const closeModalNew = document.querySelector(".modal-new__close");
    const phoneError = document.getElementById("phone-error");
    const phoneInputNew = document.getElementById("new-phone");

    // Функция для открытия модального окна
    function openModalNew() {
        if (modalNew) {
            modalNew.style.display = "flex";
            setTimeout(() => modalNew.classList.add("show"), 10);
            
            const nameInput = document.getElementById("new-name");
            if (nameInput) {
                setTimeout(() => nameInput.focus(), 50);
            }
        }
    }

    // Функция для закрытия модального окна
    function hideModalNew() {
        if (modalNew) {
            modalNew.classList.remove("show");
            setTimeout(() => {
                modalNew.style.display = "none";
                if (phoneError) phoneError.style.display = "none";
            }, 300);
        }
    }

    // Обработчик для кнопки в хедере
    const headerButton = document.querySelector(".header .nav .phone__button");
    if (headerButton) {
        headerButton.addEventListener("click", function(e) {
            e.preventDefault();
            openModalNew();
        });
    }

    // Обработчик для кнопки в hero-секции
    const heroButton = document.querySelector(".hero .phone__button");
    if (heroButton) {
        heroButton.addEventListener("click", function(e) {
            e.preventDefault();
            openModalNew();
        });
    }

    // Закрытие по кнопке "×"
    if (closeModalNew) {
        closeModalNew.addEventListener("click", hideModalNew);
    }
    
    // Закрытие при клике вне формы
    window.addEventListener("click", function (event) {
        if (event.target === modalNew) {
            hideModalNew();
        }
    });
    
    // Форматирование телефона
    if (phoneInputNew) {
        phoneInputNew.addEventListener("input", function (e) {
            let value = phoneInputNew.value.replace(/\D/g, "");
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
            
            phoneInputNew.value = formattedValue;
        });
    }
    
    // Валидация формы
    const modalNewForm = document.getElementById("modalNewForm");
    if (modalNewForm) {
        modalNewForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const name = document.getElementById("new-name").value;
            const phone = document.getElementById("new-phone").value;
            
            const phoneDigits = phone.replace(/\D/g, "");
            if (phoneDigits.length !== 12) {
                if (phoneError) phoneError.style.display = "block";
                return;
            }
            
            if (phoneError) phoneError.style.display = "none";
            
            const message = `Нова заявка на безоплатне заняття!%0AІм'я: ${name}%0AТелефон: ${phone}`;
            sendToTelegram(message);
            
            hideModalNew();
            modalNewForm.reset();
        });
    }
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