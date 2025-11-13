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
    <div class="square flex flex-col gap-2 bg-gray-50 relative" data-murale>
        <picture class="w-full h-[200px] overflow-hidden">
          <i class="fa-regular fa-heart cursor-pointer absolute bottom-2 right-2 p-1" style="color: #e00b0b;"></i>
          <img class="size-full object-cover hover:scale-110 transition-transform duration-300" src="${
            this.#image
          }" alt="image" />
        </picture>
        <div class="flex flex-col gap-3 pt-5 p-5 ">
          <p class="font-medium italic "><i class="fa-solid fa-palette" style="color: #FFD43B;"></i> ${
            this.#artiste
          } , ${this.#annee}.</p>
          <p>${this.#organisme}.</p>
          <p> ${this.#arrondissement}.</p>
        </div>
    </div>`;

    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
  }
}

export default Murale;
