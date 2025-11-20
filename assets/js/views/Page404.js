import { animate, stagger, splitText } from "animejs";
class Page404 {
  #application;
  constructor(application) {
    this.#application = application;
    this.render();
  }

  // Render la page 404
  render() {
    this.#application.conteneurHTML.innerHTML = `
          <div class="mt-[200px]">
              <section class="flex flex-col items-center gap-5 ">
                <h2 class="text-9xl font-bold text-orange-500">Oops!</h2>
                <h3 class="text-2xl">"Page introuvable"</h3>
                <a class="text-xs font-semibold cursor-pointer underline" href="/">Retour à la page d'accueil</a>
              </section>
            </div>
        `;

    // Animation du texte "Oops!"
    const { chars } = splitText("h2", { words: false, chars: true });

    // Animation avec Anime.js
    animate(chars, {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: stagger(50),
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    });
  }
}
export default Page404;
