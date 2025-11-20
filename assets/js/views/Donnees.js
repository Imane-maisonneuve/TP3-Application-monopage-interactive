import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
class Donnees {
  #application;

  constructor(application) {
    this.#application = application;
    this.render();
  }

  // Render la vue Donnees
  render() {
    this.#application.conteneurHTML.innerHTML = `

      <section >
        <div class="contenu-sur-image">
          <img src="assets/img/CEP-Knox-Hiberna.jpg" alt="iamge" />
          <h1>Murales subventionnées de la ville de Montréal</h1>
        </div>
        <div class="max-w-[1000px] mx-auto p-6">
          <p class="mb-4 text-lg">Depuis plusieurs années, la Ville de Montréal soutient la réalisation de murales extérieures visibles, créatives et liées à leur contexte. Par le biais de divers programmes, unifiés depuis 2016 au sein du Programme d'art mural, la Ville a soutenu la réalisation de centaines de murales. Cet ensemble de données présente les murales financées par la Ville de Montréal depuis 2007.</p>
          <p class="mb-6 text-lg">Lien vers la source des donnees : <a class="text-emerald-900 hover:underline hover:underline-offset-4" href="https://donnees.montreal.ca/dataset/murales">https://donnees.montreal.ca/dataset/murales</a></p>
          <h2 class="text-lg font-semibold mb-2">Les librairies utilisées sont :</h2>
          <ul class="list-disc pl-5">
            <li class="mb-1">Moment</li>
            <li class="mb-1">PageJS</li>
            <li class="mb-1">Vite</li>
            <li class="mb-1">AnimeJS</li>
            <li class="mb-1">TailwindCSS</li>
            <li class="mb-1">Font-Awesome.</li>
          </ul>
        </div>
      </section>
        `;
  }
}
export default Donnees;
