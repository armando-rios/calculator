const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const display = $("#display");
display.value = 0;
let data = ["", "", ""];
let pos = 0;
let lastOperator = 1;

const addNumber = (num) => {
  if (data[lastOperator] === "" || data[lastOperator] === undefined) {
    data[pos] += num;
    display.value === "0"
      ? (display.value = data.join(" "))
      : (display.value = data.join(" "));
  } else {
    lastOperator += 2;
    pos += 2;
    data[pos] += num;
    display.value = data.join("");
  }
};

const addOperator = (op) => {
  data[pos + 1] = op;
  display.value = data.join(" ");
};

const clearDisplay = () => {
  display.value = 0;
  data = ["", "", ""];
  pos = 0;
  lastOperator = 1;
};

const operator = (n1, n2, op) => {
  let [a, b] = [parseFloat(n1), parseFloat(n2)];
  return n1 === ""
    ? "0"
    : n2 === ""
      ? a
      : op === ""
        ? a
        : op === "+"
          ? a + b
          : op === "-"
            ? a - b
            : op === "*"
              ? a * b
              : op === "/"
                ? a / b
                : alert("Error!!!");
};

const resolveOperation = () => {
  display.value = operator(data[0], data[2], data[1]);
  data = ["", "", ""];
  pos = 0;
  lastOperator = 1;
};

const deleteButton = () => {
  if (data[pos] === "") {
    if (data[pos - 1] === "") {
      data[pos - 2] = data[pos - 2].slice(0, -1);
    }
    data[pos - 1] = data[pos - 1].slice(0, -1);
  } else {
    data[pos] = data[pos].slice(0, -1);
  }
  display.value = data.join("");
};
