document.addEventListener("DOMContentLoaded", function () {
    const coursesData = [
        { name: "Scratch", image: "courses/scratch.jpg", description: "Основи програмування для дітей", category: "Діти (7-12 років)" },
        { name: "Roblox", image: "courses/RobloxStudio.png", description: "Створення ігор у Roblox Studio", category: "Діти (7-12 років)" },
        { name: "Minecraft", image: "courses/minecraft.png", description: "Навчання коду через Minecraft", category: "Діти (7-12 років)" },
        { name: "Python", image: "courses/python.png", description: "Популярна мова програмування", category: "Підлітки (13-18 років)" },
        { name: "Web-розробка", image: "courses/web.jpg", description: "Створення сайтів та веб-додатків", category: "Підлітки (13-18 років)" },
        { name: "GameDev", image: "courses/unity.jpg", description: "Розробка ігор на Unity та Unreal", category: "Підлітки (13-18 років)" },
        { name: "Frontend", image: "courses/Frontend.jpg", description: "HTML, CSS, JavaScript для веб-розробки", category: "Дорослі (18+)" },
        { name: "Backend", image: "courses/Backend.jpg", description: "Серверна розробка та бази даних", category: "Дорослі (18+)" },
        { name: "Full Stack", image: "courses/FullStack.png", description: "Комплексне навчання Frontend та Backend", category: "Дорослі (18+)" }
    ];

    const coursesList = document.getElementById("coursesList");

    coursesData.forEach(course => {
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
});
