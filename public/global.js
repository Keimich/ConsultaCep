const input = document.getElementById("input_cep");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("button").click();
  }
});