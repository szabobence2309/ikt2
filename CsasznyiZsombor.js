const form = document.getElementById("urlap");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const nev = formData.get("nev");
  const email = formData.get("email");
  const uzenet = formData.get("uzenet");
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Koszonjuk az uzenetet, ${nev}!</p>`;
});