const buttons = [
  [
    {
      name1: "`",
      name2: "",
      num: "1",
      onclick: addText,
    },
    {
      name1: "1",
      name2: "",
      num: "2",
      onclick: addText,
    },
    {
      name1: "2",
      name2: "",
      num: "3",
      onclick: addText,
    },
    {
      name1: "3",
      name2: "",
      num: "4",
      onclick: addText,
    },
    {
      name1: "4",
      name2: "",
      num: "5",
      onclick: addText,
    },
    {
      name1: "5",
      name2: "",
      num: "6",
      onclick: addText,
    },
    {
      name1: "6",
      name2: "",
      num: "7",
      onclick: addText,
    },
    {
      name1: "7",
      name2: "",
      num: "8",
      onclick: addText,
    },
    {
      name1: "8",
      name2: "",
      num: "9",
      onclick: addText,
    },
    {
      name1: "9",
      name2: "",
      num: "10",
      onclick: addText,
    },
    {
      name1: "0",
      name2: "",
      num: "11",
      onclick: addText,
    },
    {
      name1: "-",
      name2: "",
      num: "12",
      onclick: addText,
    },
    {
      name1: "=",
      name2: "",
      num: "13",
      onclick: addText,
    },
    {
      name1: "Backspace",
      name2: "",
      num: "14",
      onclick: deleteChar,
    },
  ],
  [
    {
      name1: "Tab",
      name2: "",
      num: "15",
      onclick: addText,
    },
    {
      name1: "Q",
      name2: "",
      num: "16",
      onclick: addText,
    },
    {
      name1: "W",
      name2: "",
      num: "17",
      onclick: addText,
    },
    {
      name1: "E",
      name2: "",
      num: "18",
      onclick: addText,
    },
    {
      name1: "R",
      name2: "",
      num: "19",
      onclick: addText,
    },
    {
      name1: "T",
      name2: "",
      num: "20",
      onclick: addText,
    },
    {
      name1: "Y",
      name2: "",
      num: "21",
      onclick: addText,
    },
    {
      name1: "U",
      name2: "",
      num: "22",
      onclick: addText,
    },
    {
      name1: "I",
      name2: "",
      num: "23",
      onclick: addText,
    },
    {
      name1: "O",
      name2: "",
      num: "24",
      onclick: addText,
    },
    {
      name1: "P",
      name2: "",
      num: "25",
      onclick: addText,
    },
    {
      name1: "[",
      name2: "",
      num: "26",
      onclick: addText,
    },
    {
      name1: "]",
      name2: "",
      num: "27",
      onclick: addText,
    },
    {
      name1: "/",
      name2: "'",
      num: "28",
      onclick: addText,
    },
    {
      name1: "DEL",
      name2: "",
      num: "29",
      onclick: deleteCurrentChar,
    },
  ],
  [
    {
      name1: "Caps Lock",
      name2: "",
      num: "30",
      onclick: capsLock,
    },
    {
      name1: "A",
      name2: "",
      num: "31",
      onclick: addText,
    },
    {
      name1: "S",
      name2: "",
      num: "32",
      onclick: addText,
    },
    {
      name1: "D",
      name2: "",
      num: "33",
      onclick: addText,
    },
    {
      name1: "F",
      name2: "",
      num: "34",
      onclick: addText,
    },
    {
      name1: "G",
      name2: "",
      num: "35",
      onclick: addText,
    },
    {
      name1: "H",
      name2: "",
      num: "36",
      onclick: addText,
    },
    {
      name1: "J",
      name2: "",
      num: "37",
      onclick: addText,
    },
    {
      name1: "K",
      name2: "",
      num: "38",
      onclick: addText,
    },
    {
      name1: "L",
      name2: "",
      num: "39",
      onclick: addText,
    },
    {
      name1: ";",
      name2: "",
      num: "40",
      onclick: addText,
    },
    {
      name1: "'",
      name2: "",
      num: "41",
      onclick: addText,
    },
    {
      name1: "\r\n",
      name2: "Enter",
      num: "42",
      onclick: addText,
    },
  ],
  [
    {
      name1: "Shift",
      name2: "",
      num: "43",
      onclick: addText,
    },
    {
      name1: " ",
      name2: "",
      num: "44",
      onclick: addText,
    },
    {
      name1: "Z",
      name2: "",
      num: "45",
      onclick: addText,
    },
    {
      name1: "X",
      name2: "",
      num: "46",
      onclick: addText,
    },
    {
      name1: "C",
      name2: "",
      num: "47",
      onclick: addText,
    },
    {
      name1: "V",
      name2: "",
      num: "48",
      onclick: addText,
    },
    {
      name1: "B",
      name2: "",
      num: "49",
      onclick: addText,
    },
    {
      name1: "N",
      name2: "",
      num: "50",
      onclick: addText,
    },
    {
      name1: "M",
      name2: "",
      num: "51",
      onclick: addText,
    },
    {
      name1: ".",
      name2: "",
      num: "52",
      onclick: addText,
    },
    {
      name1: ",",
      name2: "",
      num: "53",
      onclick: addText,
    },
    {
      name1: "/",
      name2: "",
      num: "54",
      onclick: addText,
    },
    {
      name1: "▲",
      name2: "",
      num: "55",
      onclick: addText,
    },
    {
      name1: "Shift",
      name2: "'",
      num: "56",
      onclick: addText,
    },
  ],
  [
    {
      name1: "Ctrl",
      name2: "",
      num: "57",
      onclick: addText,
    },
    {
      name1: "Win",
      name2: "",
      num: "58",
      onclick: addText,
    },
    {
      name1: "Alt",
      name2: "",
      num: "59",
      onclick: addText,
    },
    {
      name1: "",
      name2: "",
      num: "60",
      onclick: addText,
    },
    {
      name1: "Alt",
      name2: "",
      num: "61",
      onclick: addText,
    },
    {
      name1: "Ctrl",
      name2: "",
      num: "62",
      onclick: addText,
    },
    {
      name1: "◀",
      name2: "",
      num: "63",
      onclick: addText,
    },
    {
      name1: "▼",
      name2: "",
      num: "64",
      onclick: addText,
    },
    {
      name1: "▶",
      name2: "",
      num: "65",
      onclick: addText,
    },
  ],
];

//ФУНКЦИОНАЛ КЛАВИАТУРЫ

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

function deleteCurrentChar(button) {
  textarea.value = textarea.value.slice(1, textarea.value.length);
}

function capsLock(button) {
  textarea.value = textarea.value.toUpperCase();
}

// Кнопка Shift
let isShiftActive = false;
function toShift(button) {
  if (button) {
    isShiftActive = true;
  } else {
    isShiftActive = false;
  }
}

//Блок с назапнием операционной системы
const nameSystem = document.createElement("div");
nameSystem.classList.add("keyboard__name-system");

document.body.append(nameSystem);

// Добавляем внутреннюю верстку
nameSystem.innerHTML = `
    <p class="keyboard__name">Клавиатура создана в операционной системе Windows</p> 
   
    `;
