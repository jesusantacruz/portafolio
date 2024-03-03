let inputTextArea = document.getElementById("input-text");
let outputTextArea = document.getElementById("output-text");
let codes = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

let encrypt = () => {
  let text = inputTextArea.value;
  codes.forEach((element) => {
    text = text.replace(new RegExp(element[0], "g"), element[1]);
  });
  outputTextArea.value = text;
};

let decrypt = () => {
  let text = inputTextArea.value;
  codes.forEach((element) => {
    text = text.replace(new RegExp(element[1], "g"), element[0]);
  });
  outputTextArea.value = text;
};

let copyText = () => {
  let text = document.getElementById("output-text").value;
  navigator.clipboard.writeText(text).then(
    () => {
      alert("¡Texto copiado al portapapeles!");
    },
    (err) => {
      console.error("No se pudo copiar el texto: ", err);
    }
  );
};

let cleanInput = (event) => {
  // take text and converts it to lowercase"
  let originalText = event.target.value.toLowerCase();
  //replace vowels
  event.target.value = originalText.replace(/[áéíóú]/g, "");
};

let cleanOutput = (event) => {
  outputTextArea.value = "";
};

document.getElementById("copy").addEventListener("click", copyText);
document.getElementById("encrypt").addEventListener("click", encrypt);
document.getElementById("decrypt").addEventListener("click", decrypt);
inputTextArea.addEventListener("keyup", cleanInput);
inputTextArea.addEventListener("keydown", cleanOutput);
