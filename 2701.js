// 2-ex
const statusText = document.createElement("p");
statusText.textContent = "Деректер алынуда...";
document.body.appendChild(statusText);

fetch("https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Деректерді алу кезінде қате пайда болды");
    }
    return response.json();
  })
  .then((data) => {
    statusText.textContent = "Деректер сәтті алынды!";
    console.log("Деректер:", data);
  })
  .catch((error) => {
    statusText.textContent = "Қате: " + error.message;
    console.error(error);
  });
