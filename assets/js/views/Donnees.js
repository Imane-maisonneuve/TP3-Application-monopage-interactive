import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
class Donnees {
  #application;

  constructor(application) {
    this.#application = application;
    this.render();
  }

  render() {
    this.#application.conteneurHTML.innerHTML = `
      <section class="container p-10 mr-auto ml-auto leading-loose">
        <h1 class="pb-5">Art mural</h1>
        <p>Depuis plusieurs années, la Ville de Montréal soutient la réalisation de murales extérieures visibles, créatives et liées à leur contexte. Par le biais de divers programmes, unifiés depuis 2016 au sein du Programme d'art mural, la Ville a soutenu la réalisation de centaines de murales. Cet ensemble de données présente les murales financées par la Ville de Montréal depuis 2007.</p>
        <p>Lien vers la source des donnees : <a class="text-emerald-900" href="https://donnees.montreal.ca/dataset/murales">https://donnees.montreal.ca/dataset/murales</a></p>
        </section>
      
        `;
  }
}
export default Donnees;
