// DATOS DINAMICOS
document.title = eventData.pageTitle;

// FONT FAMILY

document.body.style.fontFamily =
  eventData.fontFamily;

// BACKGROUND IMAGE

document.body.style.backgroundImage =
  `url("${eventData.backgroundImage}")`;

const hero =
  document.querySelector(".hero");

if (hero) {
  hero.style.backgroundImage =
    `url("${eventData.backgroundImage}")`;
}

// THEME

if (eventData.theme === "dark") {
  document.body.classList.add("dark-theme");
}

document.getElementById(
    "coupleNames"
  ).innerText = eventData.coupleNames;
  
  document.getElementById(
    "dateText"
  ).innerText = eventData.dateText;
  
  document.getElementById(
    "locationName"
  ).innerText = eventData.locationName;
  
  document.getElementById(
    "mapsLink"
  ).href = eventData.mapsLink;
  
  document.getElementById(
    "whatsappLink"
  ).href =
    eventData.whatsappLink;

document.getElementById(
  "instagramLink"
).href =
  eventData.instagramLink;

document.getElementById(
  "instagramText"
).innerText =
  eventData.instagramText;
  
// FECHA DEL EVENTO
const eventDate = new Date(
    eventData.eventDate
  ).getTime();

// COUNTDOWN
const countdown = setInterval(() => {
  const now = new Date().getTime();

  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
      (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("days").innerHTML =
    days;

  document.getElementById("hours").innerHTML =
    hours;

  document.getElementById("minutes").innerHTML =
    minutes;

  document.getElementById("seconds").innerHTML =
    seconds;
}, 1000);

// MUSICA
const music =
  document.getElementById("backgroundMusic");

const musicButton =
  document.getElementById("musicButton");

let isPlaying = false;

musicButton.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicButton.innerHTML = "🎵 Música";
  } else {
    music.play();
    musicButton.innerHTML = "⏸ Pausar";
  }

  isPlaying = !isPlaying;
});