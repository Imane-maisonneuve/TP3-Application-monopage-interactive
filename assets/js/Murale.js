class Murale {
  #application;
  #conteneurHTML;
  #artiste;
  #organisme;
  #annee;
  #adresse;
  #arrondissement;
  #image;

  constructor(
    application,
    conteneurHTML,
    artiste,
    organisme,
    annee,
    adresse,
    arrondissement,
    image
  ) {
    this.#application = application;
    this.#conteneurHTML = conteneurHTML;
    this.#artiste = artiste;
    this.#organisme = organisme;
    this.#annee = annee;
    this.#adresse = adresse;
    this.#arrondissement = arrondissement;
    this.#image = image;
    this.render();
  }

  render() {
    const gabarit = `
    <div class="flex flex-col items-center justify-between p-10" data-murale>
        <img class="size-80 object-cover" src="${this.#image}" alt="image" />
        <div class="flex flex-col gap-3 pt-5 w-80 font-semibold">
          <p>Nom de(s) l'artiste(s) : ${this.#artiste}.</p>
          <p>Organisme : ${this.#organisme}.</p>
          <p>Année : ${this.#annee}.</p>
          <p>${this.#adresse}.</p>
          <p>${this.#arrondissement}.</p>
        </div>
    </div>`;

    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
  }
}

export default Murale;
