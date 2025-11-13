import { animate, stagger, waapi, splitText } from "animejs";
import moment from "moment";
import Murale from "../Murale.js";

class Accueil {
  #application;
  #listMuralesHTML;

  constructor(application) {
    this.#application = application;
    this.render();
  }

  render() {
    this.#application.conteneurHTML.innerHTML = `<div>
      <h1 class="text-center text-2xl p-10">Murales financées par la Ville de Montréal depuis 2007 <small>(Données récupérées le 
      ${moment().format("DD-MM-YYYY")})</small>
      </h1>
    </div>
    <div class ="grid grid-cols-3 gap-10 max-w-[70%] mx-auto" data-list-event></div>`;

    this.#listMuralesHTML = document.querySelector("[data-list-event]");

    this.rechercherEvenements();
  }

  async rechercherEvenements() {
    const requete = await fetch(
      "https://montreal-prod.storage.googleapis.com/resources/d325352b-1c06-4c3a-bf5e-1e4c98e0636b/murales.geojson?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=test-datapusher-delete%40amplus-data.iam.gserviceaccount.com%2F20251112%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251112T225135Z&X-Goog-Expires=604800&X-Goog-SignedHeaders=host&x-goog-signature=602e02df07993eef9aa6a279ee2a5d742f3304a24cac7d6e0afbe8e46b45584912c1e8c966709a62685aae5790011ff06052fb2a405e89a9413523dde42d1895bbd9572aeea4d050c418a4d87bce19e898f8bd1c7ad109407d2fcdaf1ac031aef25b3f3d8b9125acec0757239b8abde88c9a892f7a5d310847e5b10502cfb2abbd7b2d1b6226983702f6bf448c8c39c96bf09289e4550e0e07f9af14b1c91bf45096bd19031e631c946a7695c6d6d7c4ca59e1b76e5e2991798d78b8bdf95661dd7c15d4eca79eedb400ca5f6f2a1048de105ea32f788038c12aad401bbec418c4585d005d4ca54fad4331baf8d7b02cb69883580cf5d96de1a2a92e2c2a2c98"
    );

    const reponse = await requete.json();

    this.#listMuralesHTML.innerHTML = "";

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
    this.animateGrid();
  }

  animateGrid() {
    const cartes = this.#listMuralesHTML.querySelectorAll("[data-murale]");

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
