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
