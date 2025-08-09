document.addEventListener("DOMContentLoaded", function () {
    const coursesData = [
        { name: "Scratch", image: "courses/Scratch.png", description: "Основи програмування для дітей", category: "Діти (7-12 років)", age: "7-12" },
        { name: "Roblox", image: "courses/Roblox.png", description: "Створення ігор у Roblox Studio", category: "Діти (7-12 років)", age: "7-12" },
        { name: "Minecraft", image: "courses/Minecraft.png", description: "Навчання коду через Minecraft", category: "Діти (7-12 років)", age: "7-12" },
        { name: "Python", image: "courses/Python.png", description: "Популярна мова програмування", category: "Підлітки (13-18 років)", age: "13-18" },
        { name: "Web-розробка", image: "courses/Web.png", description: "Створення сайтів та веб-додатків", category: "Підлітки (13-18 років)", age: "13-18" },
        { name: "GameDev", image: "courses/GameDev.png", description: "Розробка ігор на Unity та Unreal", category: "Підлітки (13-18 років)", age: "13-18" },
        { name: "Frontend", image: "courses/Frontend.png", description: "HTML, CSS, JavaScript для веб-розробки", category: "Дорослі (18+)", age: "18+" },
        { name: "Backend", image: "courses/Backend.png", description: "Серверна розробка та бази даних", category: "Дорослі (18+)", age: "18+" },
        { name: "Full Stack", image: "courses/FullStack.png", description: "Комплексне навчання Frontend та Backend", category: "Дорослі (18+)", age: "18+" }
    ];

    const coursesList = document.getElementById("coursesList");
    const ageFilters = document.querySelectorAll(".age-filter");

    // Функция для получения параметра из URL
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Функция для отображения курсов
     // Функция для отображения курсов
     function displayCourses(age = "all") {
        coursesList.innerHTML = "";
        
        const filteredCourses = age === "all" 
            ? coursesData 
            : coursesData.filter(course => course.age === age);
        
        filteredCourses.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.classList.add("courses__card");

            courseCard.innerHTML = `
                <img class="card__img tab__img" src="${course.image}" alt="${course.name}">
                <div class="courses__info tab__courses">
                    <h3 class="info__title tab__info">${course.name}</h3>
                    <p class="courses__category tab__cat">${course.category}</p>
                    <p class="courses__description tab__des">${course.description}</p>
                </div>
                <button class="courses__button" data-course="${course.name}">Записатися</button>
            `;

            coursesList.appendChild(courseCard);
        });

        // Добавляем обработчики для новых кнопок
        document.querySelectorAll('.courses__button').forEach(button => {
                button.addEventListener('click', function() {
                const courseName = this.getAttribute('data-course');
                window.location.href = `course.html?course=${encodeURIComponent(courseName)}`;
            });
        });
    }

    // Функция для открытия модального окна с выбранным курсом
    function openModalWithCourse(courseName) {
        const modal = document.getElementById('modal');
        const modalForm = document.getElementById('modalForm');
        
        // Устанавливаем выбранный курс в селекторе
        const courseSelect = modalForm.querySelector('#course');
        courseSelect.value = courseName;
        
        // Открываем модальное окно
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }

    // Проверяем параметр из URL при загрузке
    const urlAgeParam = getUrlParameter('age');
    let initialAge = "all";
    
    if (urlAgeParam && ['7-12', '13-18', '18+'].includes(urlAgeParam)) {
        initialAge = urlAgeParam;
        // Активируем соответствующую кнопку фильтра
        document.querySelector(`.age-filter[data-age="${urlAgeParam}"]`).classList.add('active');
    }

    // Инициализация - показываем курсы с учетом параметра из URL
    displayCourses(initialAge);

    // Обработчики для фильтров
    ageFilters.forEach(filter => {
        filter.addEventListener("click", function() {
            // Удаляем активный класс у всех кнопок
            ageFilters.forEach(f => f.classList.remove("active"));
            // Добавляем активный класс текущей кнопке
            this.classList.add("active");
            // Фильтруем курсы
            displayCourses(this.dataset.age);
        });
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
                    window.location.href = "thank-you.html";
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

   // Обработчик закрытия модального окна
   const closeModal = document.querySelector(".modal__close");
   if (closeModal) {
       closeModal.addEventListener("click", function() {
           const modal = document.getElementById('modal');
           modal.classList.remove("show");
           setTimeout(() => modal.style.display = "none", 300);
       });
   }
   
   // Закрытие при клике вне формы
   window.addEventListener("click", function(event) {
       const modal = document.getElementById('modal');
       if (event.target === modal) {
           modal.classList.remove("show");
           setTimeout(() => modal.style.display = "none", 300);
       }
   });