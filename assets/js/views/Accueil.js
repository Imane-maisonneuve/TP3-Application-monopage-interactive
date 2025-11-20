import { animate, stagger, waapi, splitText } from "animejs";
import moment from "moment";
import Murale from "../Murale.js";
import ToastErreur from "../components/ToastErreur.js";

class Accueil {
  #application;
  #listMuralesHTML;

  constructor(application) {
    this.#application = application;
    this.render();
  }
  // Méthode pour afficher le contenu de la vue Accueil
  render() {
    // Définir le contenu HTML de la vue Accueil
    this.#application.conteneurHTML.innerHTML = `<div>
      <h1 class="text-center text-3xl p-10">Murales financées par la Ville de Montréal depuis 2007 <small class="text-sm">(Données récupérées le 
      ${moment().format("DD-MM-YYYY")})</small>
      </h1>
    </div>
    <div class ="grid grid-cols-4 gap-10 max-w-[80%] mx-auto" data-list-event></div>`;

    // Sélectionner l'élément HTML où les murales seront affichées
    this.#listMuralesHTML = document.querySelector("[data-list-event]");

    // Appeler la méthode pour rechercher et afficher les murales
    this.rechercherEvenements();
  }

  // Méthode pour rechercher et afficher les murales
  async rechercherEvenements() {
    try {
      const requete = await fetch(
        "https://montreal-prod.storage.googleapis.com/resources/d325352b-1c06-4c3a-bf5e-1e4c98e0636b/murales.geojson?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=test-datapusher-delete%40amplus-data.iam.gserviceaccount.com%2F20251120%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251120T001412Z&X-Goog-Expires=604800&X-Goog-SignedHeaders=host&x-goog-signature=41d935c9a6bb86b897aeae9ddf710e8c0e5e6673ad668f187235ca739fbaf6a8ea78a0ab35f5463af448722975903468fdb6ba0df50fc992aba8ecc173f562953b09f1c95b9cd3054939adf9d249de150ebdfa6b9b4d9f6028c46d43136cf4a64ec274dc7f67a776c9c0e328b98e466ecff678d10eee68ca58359969910dda0e83d5847359bcff394c4dfcc2885a38dbbbdc051a2f3d2c62a8bff4cc66594211ca96d2dd6f30b40ec8cc111edabc20c65b21d54577041cffaa3900d0a739b080d36cb2de7972d66c84b56f016e74291f18ec4fd1e1a2410301aa6ac049855c9b371acc6fc92e54ca4a2398758c285f93a7637c5a9d1b79e6833e7610eae32083"
      );

      const reponse = await requete.json();

      // Vérifier si la réponse est valide et afficher un toast d'erreur si ce n'est pas le cas
      if (!reponse) {
        throw new Error("Erreur lors de la récupération des données");
      }

      // Vider le contenu HTML actuel de la liste des murales
      this.#listMuralesHTML.innerHTML = "";

      // Parcourir les fonctionnalités (murales) dans la réponse et créer des instances de Murale pour chaque murale
      reponse.features.forEach(
        function (feature) {
          const murale = new Murale(
            this.#application,
            this.#listMuralesHTML,
            feature.properties.artiste,
            feature.properties.organisme,
            feature.properties.annee,
            feature.properties.adresse,
            feature.properties.arrondissement,
            feature.properties.image
          );
        }.bind(this)
      );
      // Appeler la méthode pour animer la grille des murales lors de leur affichage
      this.animateGrid();
    } catch (erreur) {
      new ToastErreur("Erreur lors de la récupération des données");
    }
  }

  // Méthode pour animer la grille des murales
  animateGrid() {
    // Sélectionner toutes les cartes de murales dans la liste des murales
    const cartes = this.#listMuralesHTML.querySelectorAll("[data-murale]");

    // Appliquer une animation aux cartes en utilisant Anime.js
    animate(cartes, {
      scale: [{ to: [0, 1.25, 1] }, { to: 1 }],
      boxShadow: [
        { to: "0 0 1rem 0 currentColor" },
        { to: "0 0 0rem 0 currentColor" },
      ],
      delay: stagger(100, {
        grid: [11, 4],
      }),
    });
  }
}

export default Accueil;
