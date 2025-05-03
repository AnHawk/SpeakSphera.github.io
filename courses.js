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
                <button class="courses__button">Детальніше</button>
            `;

            coursesList.appendChild(courseCard);
        });
    }

    // Инициализация - показываем все курсы
    displayCourses();

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