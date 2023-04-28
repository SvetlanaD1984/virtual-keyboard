const buttons = [
  [
    {
      name1: "~",
      name2: "backquote",
      num: "1",
      onclick: addText,
    },
    {
      name1: "\r\n",
      name2: "1",
      num: "2",
      onclick: addText,
    },
    {
      name1: "@",
      name2: "2",
      num: "3",
    },
    {
      name1: "#",
      name2: "3",
      num: "4",
    },
    {
      name1: "$",
      name2: "4",
      num: "5",
    },
    {
      name1: "%",
      name2: "5",
      num: "6",
    },
    {
      name1: ":",
      name2: "6",
      num: "7",
    },
    {
      name1: "?",
      name2: "7",
      num: "8",
    },
    {
      name1: "*",
      name2: "8",
      num: "9",
    },
    {
      name1: "(",
      name2: "9",
      num: "10",
    },
    {
      name1: ")",
      name2: "0",
      num: "11",
    },
    {
      name1: "_",
      name2: "-",
      num: "12",
    },
    {
      name1: "+",
      name2: "=",
      num: "13",
    },
    {
      name1: "Backspace",
      name2: "Backspace",
      num: "13",
      onclick: deleteChar,
    },
  ],
  [
    {
      name1: "",
      name2: "Backspace",
      num: "13",
    },
  ],
  [
    {
      name1: "",
      name2: "Backspace",
      num: "13",
    },
  ],
  [
    {
      name1: "",
      name2: "Backspace",
      num: "13",
    },
  ],
  [
    {
      name1: "",
      name2: "Backspace",
      num: "13",
    },
  ],
];

let isShiftActive = false;

//ФУНКЦИОНАЛ КЛАВИАТУРЫ

//Алгоритм: 1. По клику на кнопки на виртуальной клавиатуре получить символ
// 2. Вывести этот символ в textarea

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

document.body.append(mainContainer);

// Добавляем внутреннюю верстку
mainContainer.innerHTML = `
    <h1 class="keyboard__name">Виртуальная клавиатура</h1> 
    <textarea class="keyboard__textarea"></textarea>
    <div class="keyboard__container">
    </div>
    `;

const keyboard = mainContainer.querySelector(".keyboard__container");

function renderButtons() {
  buttons.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("keyboard__row");

    row.forEach((button) => {
      const keyboardButton = document.createElement("div"); // Создаем элемент
      keyboardButton.classList.add("keyboard__button"); // Добавляем класс на элемент

      // Добавляем внутреннюю верстку
      keyboardButton.innerHTML = `
    <div class="keyboard__button-title">
    <p>${button.name1}</p>
    <p>${button.name2}</p>
  </div>`;

      keyboardButton.addEventListener("click", () => button.onclick(button));

      rowElement.appendChild(keyboardButton); // вставляем кнопку в ряд keyboard
    });

    keyboard.appendChild(rowElement);
  });
}
renderButtons();

const textarea = mainContainer.querySelector(".keyboard__textarea");

function addText(button) {
  textarea.value += button.name1;
}

function deleteChar(button) {
  textarea.value = textarea.value.slice(0, textarea.value.length - 1);
}
