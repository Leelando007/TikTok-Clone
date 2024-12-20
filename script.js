// Variablen deklarieren
const videoPlayers = document.querySelectorAll(".videoPlayer");
const buttonLikes = document.querySelectorAll(".like");
const buttonSaves = document.querySelectorAll(".favorite");
const copiedLinks = document.querySelectorAll(".sharebutton");

// Play und Pause Funktion
videoPlayers.forEach((videoPlayer) => {
  videoPlayer.addEventListener("click", () => {
    if (!videoPlayer.paused) {
      videoPlayer.pause();
      videoPlayer.nextElementSibling.classList.add("show");
    } else {
      videoPlayer.play();
      videoPlayer.nextElementSibling.classList.remove("show");
    }
  });
});

// Like Funktion
buttonLikes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("love");
    const likeCountElement = like.nextElementSibling; // Zähler direkt nach dem Like-Button
    let count = parseInt(likeCountElement.textContent); // Aktuelle Anzahl
    count += like.classList.contains("love") ? 1 : -1; // Hochzählen oder abziehen
    likeCountElement.textContent = count;
  });
});

// Favorite Funktion
buttonSaves.forEach((favorite) => {
  favorite.addEventListener("click", () => {
    favorite.classList.toggle("saved");
    const saveCountElement = favorite.nextElementSibling; // Zähler direkt nach dem Save-Button
    let count = parseInt(saveCountElement.textContent); // Aktuelle Anzahl
    count += favorite.classList.contains("saved") ? 1 : -1; // Hochzählen oder abziehen
    saveCountElement.textContent = count;
  });
});



//LINK KOPIEREN
document.getElementById('sharebutton').addEventListener('click', () => {
  const link = "https://www.wikipedia.de/"; // Zu kopierender Link
  navigator.clipboard.writeText(link).then(() => {
      alert("Link wurde in die Zwischenablage kopiert!");
  }).catch(err => {
      console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
  });
});




// FARBE ÄNDERN BEI LINK KOPIEREN
copiedLinks.forEach((sharebutton) => {
  sharebutton.addEventListener("click", () => {
    sharebutton.classList.toggle("copied");
    const copyCountElement = sharebutton.nextElementSibling; // Zähler direkt nach dem Save-Button
    let count = parseInt(saveCountElement.textContent); // Aktuelle Anzahl
    count += favorite.classList.contains("copied") ? 1 : -1; // Hochzählen oder abziehen
    saveCountElement.textContent = count;
  });
});
