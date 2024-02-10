const initialPositions = {
  card1: { translateX: -80, translateY: -100 },
  card2: { translateX: -80, translateY: 120},
  card4: { translateX: 80, translateY: 120},
  card3: { translateX: 80, translateY: -100 },
};

anime({
  targets: "h1",
  easing: "easeInOutSine",
  duration: 2400,
  opacity: 1,
  complete: function () {
    anime({
      targets: "h1",
      top: '100px',
      fontSize: ['3rem', '2.3em'],
      easing: "linear",
      duration: 1500, 
      complete: () => {
        anime({
          targets: ".hide",
          opacity: 1,
          easing: "easeInOutSine",
          duration: 2400,
          complete: () => {
            anime({
              targets: ".card",
              translateX: function (el) {
                const id = el.id;
                return initialPositions[id].translateX;
              },
              translateY: function (el) {
                const id = el.id;
                return initialPositions[id].translateY || 0;
              },
              delay: anime.stagger(100),
              easing: "easeInOutQuad",
              duration: 1000,
            });
          }, 
        });
      }
    });
  },
});

const dialog = document.querySelector("#response");
const messages = {
  card1: "As the King of Wands, I offer you ardent love and a life full of adventure. Are you ready to join me on this journey?",
  card2: "The Page of Pentacles brings with it opportunities and growth. Are you ready to embark on a journey of discovery and prosperity with me?",
  card3: "Like the Tower, our love can withstand the tests of time and storms. Are you ready to face the changes with me and find the beauty in rebuilding our destiny together?",
  card4: "Just like the Two of Wands, together we are stronger, bolder, and more capable of conquering the world of love and beyond. Are you ready to join me in writing our own story full of adventure and love?",
};

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.id;
    const message = messages[id];
    dialog.textContent = message;
    dialog.showModal();
  });
});