const coursePrograms = {
  "Roblox": {
    description: "Створення ігор у Roblox Studio",
    modules: [
      {
        title: "Модуль 1: Вступ до Roblox Studio",
        lessons: [
          "Що таке Roblox і як він працює",
          "Інтерфейс Roblox Studio",
          "Налаштування першої сцени"
        ]
      },
      {
        title: "Модуль 2: Основи 3D-моделювання",
        lessons: [
          "Додавання і редагування об'єктів",
          "Робота з розміром, формою та положенням",
          "Матеріали, кольори, освітлення"
        ]
      },
      {
        title: "Модуль 3: Основи скриптингу (Lua)",
        lessons: [
          "Ознайомлення з Lua",
          "Змінні, умови, цикли",
          "Проста взаємодія (події)"
        ]
      },
      {
        title: "Модуль 4: UI та взаємодія з гравцем",
        lessons: [
          "Створення кнопок і меню",
          "Скрипти руху персонажа",
          "Життєві бали, досвід, інвентар"
        ]
      },
      {
        title: "Модуль 5: Публікація гри",
        lessons: [
          "Оптимізація продуктивності",
          "Створення Game Pass",
          "Публікація гри та збір фідбеку"
        ]
      },
      {
        title: "Модуль 6: Фінальний проєкт",
        lessons: [
          "Розробка власної гри",
          "Презентація проєкту",
          "Захист фінальної роботи"
        ]
      }
    ]
  },
  "Web-розробка": {
  description: "Створення сучасних вебсайтів: HTML, CSS, JavaScript",
  modules: [
    {
      title: "Модуль 1: Основи вебу",
      lessons: [
        "Що таке сайт, браузер, сервер",
        "Структура HTML-документу",
        "Перший сайт: створення index.html"
      ]
    },
    {
      title: "Модуль 2: HTML — розмітка контенту",
      lessons: [
        "Заголовки, абзаци, списки",
        "Посилання, зображення, таблиці",
        "Форми: поля вводу, кнопки"
      ]
    },
    {
      title: "Модуль 3: CSS — стилізація",
      lessons: [
        "Підключення CSS до HTML",
        "Кольори, розміри, шрифти",
        "Box model: padding, margin, border"
      ]
    },
    {
      title: "Модуль 4: Верстка блоків",
      lessons: [
        "Flexbox",
        "Grid Layout",
        "Медіа-запити для адаптивності"
      ]
    },
    {
      title: "Модуль 5: Основи JavaScript",
      lessons: [
        "Змінні, типи даних",
        "Події (Events)",
        "Маніпуляції з DOM"
      ]
    },
    {
      title: "Модуль 6: Міні-проєкт",
      lessons: [
        "Лендинг для кафе",
        "Форма зворотного зв’язку",
        "Анімації, переходи, підсвічування"
      ]
    }
  ]
},
"Python": {
  description: "Популярна мова програмування для автоматизації, аналізу даних і створення проєктів",
  modules: [
    {
      title: "Модуль 1: Вступ до Python",
      lessons: [
        "Що таке Python і для чого він",
        "Установка середовища (IDLE / VS Code)",
        "Перша програма: Hello, World!"
      ]
    },
    {
      title: "Модуль 2: Основи синтаксису",
      lessons: [
        "Змінні, типи даних",
        "Умови (if / else)",
        "Цикли for / while"
      ]
    },
    {
      title: "Модуль 3: Функції та модулі",
      lessons: [
        "Створення та виклик функцій",
        "Аргументи, повернення значень",
        "Імпорт готових модулів"
      ]
    },
    {
      title: "Модуль 4: Списки, словники, кортежі",
      lessons: [
        "Структури даних у Python",
        "Методи списків і словників",
        "Цикл по структурі"
      ]
    },
    {
      title: "Модуль 5: Файли та введення",
      lessons: [
        "Ввід/вивід з клавіатури",
        "Робота з файлами (читання, запис)",
        "Практика: зберігання результатів"
      ]
    },
    {
      title: "Модуль 6: Фінальний проєкт",
      lessons: [
        "Калькулятор",
        "Ігра: Вгадай число",
        "Консольна програма з меню"
      ]
    }
  ]
},
"Scratch": {
  description: "Основи програмування для дітей через візуальне середовище Scratch",
  modules: [
    {
      title: "Модуль 1: Вступ до Scratch",
      lessons: [
        "Інтерфейс середовища",
        "Створення першого спрайту",
        "Запуск та зупинка програми"
      ]
    },
    {
      title: "Модуль 2: Основи анімації",
      lessons: [
        "Рухи та координати",
        "Малювання та зовнішній вигляд",
        "Зміна костюмів і сцен"
      ]
    },
    {
      title: "Модуль 3: Події та логіка",
      lessons: [
        "Обробка подій (натискання клавіш)",
        "Умови if/else",
        "Цикли repeat та forever"
      ]
    },
    {
      title: "Модуль 4: Змінні та повідомлення",
      lessons: [
        "Змінні в Scratch",
        "Обмін повідомленнями між об'єктами",
        "Створення таймера або лічильника"
      ]
    },
    {
      title: "Модуль 5: Міні-проєкти",
      lessons: [
        "Мультфільм",
        "Інтерактивна історія",
        "Гра 'Вгадай число'"
      ]
    }
  ]
},
"Minecraft": {
  description: "Навчання програмуванню та логіці через гру Minecraft Education Edition",
  modules: [
    {
      title: "Модуль 1: Вступ до Minecraft Education",
      lessons: [
        "Що таке Minecraft для освіти",
        "Установка та запуск",
        "Основи керування гравцем"
      ]
    },
    {
      title: "Модуль 2: Агент і кодування",
      lessons: [
        "Початок роботи з агентом",
        "Блокове програмування",
        "Виконання простих команд"
      ]
    },
    {
      title: "Модуль 3: Умови та цикли",
      lessons: [
        "Використання if",
        "Створення циклів",
        "Реакція на події"
      ]
    },
    {
      title: "Модуль 4: Будівництво за допомогою коду",
      lessons: [
        "Створення стін та будинків",
        "Множинне будівництво",
        "Генерація лабіринтів"
      ]
    },
    {
      title: "Модуль 5: Проєкти",
      lessons: [
        "Автоматична ферма",
        "Інтерактивна карта",
        "Фінальний проєкт: свій світ"
      ]
    }
  ]
},
"GameDev": {
  description: "Розробка ігор на Unity або Unreal Engine для початківців",
  modules: [
    {
      title: "Модуль 1: Вступ до GameDev",
      lessons: [
        "Типи ігор і рушіїв",
        "Знайомство з Unity/Unreal",
        "Інтерфейс середовища"
      ]
    },
    {
      title: "Модуль 2: Рівні та сцени",
      lessons: [
        "Створення 2D/3D сцени",
        "Об’єкти, трансформації",
        "Камера та освітлення"
      ]
    },
    {
      title: "Модуль 3: Скрипти та логіка",
      lessons: [
        "Основи C# або Blueprint",
        "Події, дії гравця",
        "Зіткнення та тригери"
      ]
    },
    {
      title: "Модуль 4: UI та звуки",
      lessons: [
        "Меню, кнопки, HUD",
        "Звукові ефекти",
        "Аудіо-менеджмент"
      ]
    },
    {
      title: "Модуль 5: Завершення гри",
      lessons: [
        "Збереження даних",
        "Фінальний рівень",
        "Публікація гри"
      ]
    }
  ]
},
"Frontend": {
  description: "Повний курс з HTML, CSS, JavaScript для створення сучасних вебінтерфейсів",
  modules: [
    {
      title: "Модуль 1: HTML5",
      lessons: [
        "Розмітка сторінки",
        "Семантичні теги",
        "Форми та елементи"
      ]
    },
    {
      title: "Модуль 2: CSS3",
      lessons: [
        "Кольори, шрифти, тіні",
        "Flexbox і Grid",
        "Адаптивна верстка"
      ]
    },
    {
      title: "Модуль 3: JavaScript (база)",
      lessons: [
        "Змінні, масиви, об’єкти",
        "Функції та події",
        "Маніпуляції з DOM"
      ]
    },
    {
      title: "Модуль 4: Поглиблений JS",
      lessons: [
        "Асинхронність (fetch, async)",
        "Локальне зберігання",
        "Валідація форм"
      ]
    },
    {
      title: "Модуль 5: Проєкт",
      lessons: [
        "Інтернет-магазин",
        "Фільтри, сортування",
        "Розгортання на GitHub"
      ]
    }
  ]
},
"Backend": {
  description: "Навчання серверній розробці на Node.js з роботою з базами даних",
  modules: [
    {
      title: "Модуль 1: Основи серверів",
      lessons: [
        "Що таке сервер і API",
        "HTTP-запити",
        "Node.js: вступ"
      ]
    },
    {
      title: "Модуль 2: Node.js та Express",
      lessons: [
        "Створення API з Express",
        "Роутинг і middleware",
        "Обробка форм"
      ]
    },
    {
      title: "Модуль 3: Бази даних",
      lessons: [
        "MongoDB або PostgreSQL",
        "Підключення до бази",
        "CRUD операції"
      ]
    },
    {
      title: "Модуль 4: Безпека та автентифікація",
      lessons: [
        "JWT, токени",
        "Ролі та доступи",
        "Захист API"
      ]
    },
    {
      title: "Модуль 5: Фінальний проєкт",
      lessons: [
        "Реєстрація/вхід",
        "Адмінпанель",
        "Розгортання на сервері"
      ]
    }
  ]
},
"Full Stack": {
  description: "Комплексне навчання як фронтенду, так і бекенду. HTML, JS, Node, база даних.",
  modules: [
    {
      title: "Модуль 1: Основи HTML/CSS",
      lessons: [
        "Розмітка та стилі",
        "Flexbox, адаптивність",
        "Практика: лендинг"
      ]
    },
    {
      title: "Модуль 2: JavaScript",
      lessons: [
        "Основи JS",
        "Взаємодія з DOM",
        "Форми, події"
      ]
    },
    {
      title: "Модуль 3: Node.js + Express",
      lessons: [
        "Запуск сервера",
        "API та маршрути",
        "Обробка запитів"
      ]
    },
    {
      title: "Модуль 4: База даних (MongoDB)",
      lessons: [
        "Збереження даних",
        "Авторизація",
        "Реєстрація користувачів"
      ]
    },
    {
      title: "Модуль 5: Повна інтеграція",
      lessons: [
        "Frontend ↔ Backend",
        "Запити з клієнта",
        "Реакція на помилки"
      ]
    },
    {
      title: "Модуль 6: Фінальний проєкт",
      lessons: [
        "Інтернет-магазин",
        "Кошик, оплата",
        "Розгортання повної системи"
      ]
    }
  ]
}
};

function getCourseNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('course');
}

function renderCourse(courseName) {
  const course = coursePrograms[courseName];
  if (!course) {
    document.body.innerHTML = "<p>Курс не знайдено</p>";
    return;
  }

  document.getElementById("course-title").textContent = courseName;
  document.getElementById("course-description").textContent = course.description;
  document.getElementById("course").innerHTML = `<option value="${courseName}">${courseName}</option>`;

  const container = document.getElementById("modules-container");
  course.modules.forEach((mod, index) => {
    const moduleBlock = document.createElement("div");
    moduleBlock.classList.add("module");

    moduleBlock.innerHTML = `
      <div class="module-header" data-index="${index}">
        <span>${mod.title}</span>
        <span class="toggle-icon">+</span>
      </div>
      <ul class="lesson-list hidden">
        ${mod.lessons.map(lesson => `<li>${lesson}</li>`).join("")}
      </ul>
    `;

    container.appendChild(moduleBlock);
  });

  // Додаємо логіку згортання
  container.querySelectorAll(".module-header").forEach(header => {
    header.addEventListener("click", () => {
      const ul = header.nextElementSibling;
      ul.classList.toggle("hidden");
      const icon = header.querySelector(".toggle-icon");
      icon.textContent = ul.classList.contains("hidden") ? "+" : "−";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const courseName = getCourseNameFromURL();
  renderCourse(courseName);

  // Відкрити модальне
  const enrollBtn = document.getElementById("enrollBtn");
  const modal = document.getElementById("modal");

  enrollBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
  });

  // Закриття модального
  document.querySelector(".modal__close").addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => modal.style.display = "none", 300);
    }
  });

  // Надсилання форми
  document.getElementById("modalForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;

    const botToken = "6746869776:AAFBDOC2iCzZi747ehkV_VtWZlwIe3w8nuU";
    const chatId = "-4095221548";
    const message = `Нова заявка!%0AІм'я: ${name}%0AТелефон: ${phone}%0AКурс: ${course}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`)
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          modal.style.display = "none";
          window.location.href = "thank-you.html";
        } else {
          alert("Помилка при надсиланні!");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Помилка при надсиланні!");
      });
  });
});
