const time = document.getElementById("time");
const greetings = document.getElementById("greetings");
const todoInput = document.getElementById("todo-input");
const todo = document.getElementById("todo-list");
const footer = document.getElementById("footer");

const quotes = [
  "명언1",
  "명언2",
  "명언3",
  "명언4",
  "명언5",
  "명언6",
  "명언7",
  "명언8",
];

setInterval(timeCheck, 1000);

function timeCheck() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  time.textContent = `${
    hours > 10 ? hours.toString() : "0" + hours.toString()
  }:${minutes > 10 ? minutes.toString() : "0" + minutes.toString()}`;

  switch (true) {
    case 12 < hours < 18:
      greetings.textContent = `Good afternoon!`;
      break;
    case 17 < hours < 23:
      greetings.textContent = `Good evening!`;
      break;
    case 22 < hours || hours < 6:
      greetings.textContent = `Good Night!`;
      break;
    case 5 < hours < 13:
      greetings.textContent = `Good morning!`;
      break;
    default:
      greetings.textContent = `?`;
  }
}

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = todoInput.value.trim();
    console.log(value);
    todoInput.value = "";
    todo.innerHTML = `<p class="todo">${value}</p>` + todo.innerHTML;
  }
});

timeCheck();

footer.textContent = quotes[Math.floor(Math.random() * quotes.length)];
