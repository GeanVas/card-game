const initialPositions = {
  card1: { translateX: -80, translateY: -100 },
  card2: { translateX: -80, translateY: 140},
  card4: { translateX: 80, translateY: 140},
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
