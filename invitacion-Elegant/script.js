// LANGUAGE

const t =
  translations[
    eventData.language
  ];

// PAGE TITLE

document.title =
  eventData.pageTitle;

// THEME

if (eventData.theme === "light") {

  document.body.classList.add(
    "light-theme"
  );
}

// BACKGROUND IMAGE

document.body.style.backgroundImage =
  `url("${eventData.backgroundImage}")`;

// HERO CONTENT

document.getElementById(
  "coupleNames"
).innerText =
  eventData.coupleNames;

document.getElementById(
  "dateText"
).innerText =
  eventData.dateText;

document.querySelector(
  ".hero-message"
).innerText =
  eventData.heroMessage;

// STORY SECTION

document.getElementById(
  "storyTitle"
).innerText =
  eventData.storyTitle;

document.getElementById(
  "storyText"
).innerText =
  eventData.storyText;

// MUSIC BUTTON

document.getElementById(
  "musicButton"
).innerText =
  eventData.musicTitle;

// MUSIC

const music =
  document.getElementById(
    "backgroundMusic"
  );

const musicButton =
  document.getElementById(
    "musicButton"
  );

let isPlaying = false;

musicButton.addEventListener(
  "click",
  () => {

    if (isPlaying) {

      music.pause();

      musicButton.innerText =
        "🎵";

    } else {

      music.play();

      musicButton.innerText =
        "⏸";
    }

    isPlaying = !isPlaying;
  }
);

// GALLERY

const galleryGrid =
  document.getElementById(
    "galleryGrid"
  );

eventData.galleryImages.forEach(
  (image) => {

    const galleryItem =
      document.createElement("div");

    galleryItem.classList.add(
      "gallery-item"
    );

    galleryItem.innerHTML = `
      <img src="${image}" alt="gallery">
    `;

    galleryGrid.appendChild(
      galleryItem
    );
  }
);

// EVENT DATE

const eventDate =
  new Date(
    eventData.eventDate
  ).getTime();

// COUNTDOWN

setInterval(() => {

  const now =
    new Date().getTime();

  const distance =
    eventDate - now;

  const days = Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (
      distance %
      (1000 * 60 * 60 * 24)
    ) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (
      distance %
      (1000 * 60 * 60)
    ) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (
      distance %
      (1000 * 60)
    ) / 1000
  );

  document.getElementById(
    "days"
  ).innerText = days;

  document.getElementById(
    "hours"
  ).innerText = hours;

  document.getElementById(
    "minutes"
  ).innerText = minutes;

  document.getElementById(
    "seconds"
  ).innerText = seconds;

}, 1000);

// TIMELINE

const timeline =
  document.getElementById(
    "timeline"
  );

eventData.timeline.forEach(
  (item) => {

    const timelineItem =
      document.createElement("div");

    timelineItem.classList.add(
      "timeline-item"
    );

    timelineItem.innerHTML = `

      <div class="timeline-dot"></div>

      <div class="timeline-card">

        <p class="timeline-hour">
          ${item.hour}
        </p>

        <h3>
          ${item.title}
        </h3>

        <p class="timeline-description">
          ${item.description}
        </p>

      </div>
    `;

    timeline.appendChild(
      timelineItem
    );
  }
);

// DETAILS

const detailsGrid =
  document.getElementById(
    "detailsGrid"
  );

eventData.details.forEach(
  (detail) => {

    const card =
      document.createElement("div");

    card.classList.add(
      "details-card"
    );

    card.innerHTML = `

      <h3>
        ${detail.title}
      </h3>

      <p>
        ${detail.text}
      </p>
    `;

    detailsGrid.appendChild(
      card
    );
  }
);

// GIFTS

const giftsGrid =
  document.getElementById(
    "giftsGrid"
  );

eventData.gifts.forEach(
  (gift) => {

    const card =
      document.createElement("div");

    card.classList.add(
      "gift-card"
    );

    // LINK TYPE

    if (gift.type === "link") {

      card.innerHTML = `

        <h3>
          ${gift.title}
        </h3>

        <a
          href="${gift.url}"
          target="_blank"
          class="gift-button"
        >
          ${gift.button}
        </a>
      `;
    }

    // BANK TYPE

    if (gift.type === "bank") {

      card.innerHTML = `

        <h3>
          ${gift.title}
        </h3>

        <button
          class="gift-button copy-clabe"
          data-clabe="${gift.clabe}"
        >
          ${gift.button}
        </button>
      `;
    }

    giftsGrid.appendChild(card);
  }
);

// COPY CLABE

document.addEventListener(
  "click",
  (e) => {

    if (
      e.target.classList.contains(
        "copy-clabe"
      )
    ) {

      const clabe =
        e.target.dataset.clabe;

      navigator.clipboard.writeText(
        clabe
      );

      e.target.innerText =
        "CLABE copiada ✓";

      setTimeout(() => {

        e.target.innerText =
          "Copiar CLABE";

      }, 2000);
    }
  }
);

// RSVP FORM

document.getElementById(
  "rsvpTitle"
).innerText =
  eventData.rsvpTitle;

document.getElementById(
  "rsvpSubtitle"
).innerText =
  eventData.rsvpSubtitle;

const rsvpForm =
  document.getElementById(
    "rsvpForm"
  );

rsvpForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    const guestName =
      document.getElementById(
        "guestName"
      ).value;

    const guestCount =
      document.getElementById(
        "guestCount"
      ).value;

    const guestMessage =
      document.getElementById(
        "guestMessage"
      ).value;

    const message = `Hola!

Confirmo mi asistencia 🎉

Nombre:
${guestName}

Invitados:
${guestCount}

Mensaje:
${guestMessage}`;

    const whatsappURL =
`https://wa.me/${eventData.rsvpWhatsapp}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappURL,
      "_blank"
    );
  }
);

// LOADER

window.addEventListener(
  "load",
  () => {

    const loader =
      document.getElementById(
        "loader"
      );

    setTimeout(() => {

      loader.classList.add(
        "hide"
      );

    }, 1800);
  }
);

// SCROLL REVEAL

const revealElements =
  document.querySelectorAll(
    "[data-reveal]"
  );

const revealOnScroll = () => {

  const windowHeight =
    window.innerHeight;

  revealElements.forEach(
    (element) => {

      const elementTop =
        element.getBoundingClientRect().top;

      if (
        elementTop <
        windowHeight - 120
      ) {

        element.classList.add(
          "active"
        );
      }
    }
  );
};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// PARALLAX HERO

const hero =
  document.querySelector(
    "[data-parallax]"
  );

window.addEventListener(
  "scroll",
  () => {

    const scrollY =
      window.scrollY;

    hero.style.backgroundPosition =
      `center ${scrollY * 0.5}px`;
  }
);

// LIGHTBOX

const lightbox =
  document.getElementById(
    "lightbox"
  );

const lightboxImage =
  document.getElementById(
    "lightboxImage"
  );

const lightboxClose =
  document.getElementById(
    "lightboxClose"
  );

// OPEN

document.addEventListener(
  "click",
  (e) => {

    if (
      e.target.tagName === "IMG" &&
      e.target.closest(".gallery-item")
    ) {

      lightbox.classList.add(
        "active"
      );

      lightboxImage.src =
        e.target.src;
    }
  }
);

// CLOSE BUTTON

lightboxClose.addEventListener(
  "click",
  () => {

    lightbox.classList.remove(
      "active"
    );
  }
);

// CLOSE OUTSIDE IMAGE

lightbox.addEventListener(
  "click",
  (e) => {

    if (e.target === lightbox) {

      lightbox.classList.remove(
        "active"
      );
    }
  }
);

// INSTAGRAM

document.getElementById(
  "instagramLink"
).href =
  eventData.instagramLink;

document.getElementById(
  "instagramText"
).innerText =
  eventData.instagramText;

// CALENDAR

const calendarURL =
`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventData.calendarTitle)}&dates=${eventData.calendarStart}/${eventData.calendarEnd}&details=${encodeURIComponent(eventData.calendarDescription)}&location=${encodeURIComponent(eventData.calendarLocation)}`;

document.getElementById(
  "calendarButton"
).href =
  calendarURL;

document.getElementById(
  "saveTheDate"
).innerText =
  t.saveTheDate;

  document.getElementById(
  "storySmall"
).innerText =
  t.storySmall;

document.getElementById(
  "countdownSmall"
).innerText =
  t.countdownSmall;

document.getElementById(
  "gallerySmall"
).innerText =
  t.gallerySmall;

document.getElementById(
  "galleryTitle"
).innerText =
  t.galleryTitle;

document.getElementById(
  "timelineSmall"
).innerText =
  t.timelineSmall;

document.getElementById(
  "timelineTitle"
).innerText =
  t.timelineTitle;

document.getElementById(
  "detailsSmall"
).innerText =
  t.detailsSmall;

  document.getElementById(
  "loaderText"
).innerText =
  t.loaderText;

document.getElementById(
  "detailsTitle"
).innerText =
  t.detailsTitle;

  document.getElementById(
  "giftsTitle"
).innerText =
  t.giftsTitle;

document.getElementById(
  "giftsSmall"
).innerText =
  t.giftsSmall;

document.getElementById(
  "rsvpSmall"
).innerText =
  t.rsvpSmall;

  document.getElementById(
  "calendarButton"
).innerText =
  t.addCalendar;

  document.getElementById(
  "countdownTitle"
).innerText =
  t.countdownTitle;

  document.getElementById(
  "daysLabel"
).innerText =
  t.countdownDays;

document.getElementById(
  "hoursLabel"
).innerText =
  t.countdownHours;

document.getElementById(
  "minutesLabel"
).innerText =
  t.countdownMinutes;

document.getElementById(
  "secondsLabel"
).innerText =
  t.countdownSeconds;

document.getElementById(
  "guestName"
).placeholder =
  t.yourName;

document.getElementById(
  "guestCount"
).placeholder =
  t.guestCount;

document.getElementById(
  "guestMessage"
).placeholder =
  t.message;

document.querySelector(
  ".rsvp-form button"
).innerText =
  t.confirmButton;

const fontPresets = {

  romanticLuxury: {
    title:
      "'Cormorant Garamond', serif",

    body:
      "'Raleway', sans-serif"
  },

  modernMinimal: {
    title:
      "'Montserrat', sans-serif",

    body:
      "'Raleway', sans-serif"
  },

  editorialElegant: {
    title:
      "'DM Serif Display', serif",

    body:
      "'Raleway', sans-serif"
  },

  classyWedding: {
    title:
      "'Playfair Display', serif",

    body:
      "'Raleway', sans-serif"
  },

  luxuryClassic: {
    title:
      "'Cinzel', serif",

    body:
      "'Raleway', sans-serif"
  },

  softRomantic: {
    title:
      "'Great Vibes', cursive",

    body:
      "'Montserrat', sans-serif"
  }
};

const selectedPreset =
  fontPresets[
    eventData.fontPreset
  ];

document.documentElement.style.setProperty(
  "--title-font",
  selectedPreset.title
);

document.documentElement.style.setProperty(
  "--body-font",
  selectedPreset.body
);

document.documentElement.lang =
  eventData.language;