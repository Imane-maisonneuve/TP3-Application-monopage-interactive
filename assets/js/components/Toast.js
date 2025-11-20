class Toast {
  constructor(message) {
    this._conteneurHTML = document.body;
    this._elementHTML;
    this._message = message;
    this.injecterHTML();
  }
  // modifier le message du toast
  set message(nouveauMessage) {
    if (nouveauMessage == "") {
      console.warn("Attention message invalide");

      return;
    }
    this._message = nouveauMessage.toLowerCase();
  }
  // obtenir le message du toast
  get message() {
    return this._message;
  }
  // cacher le toast
  cacher() {
    if (this._elementHTML != null) {
      this._elementHTML.remove();
    }
  }
  // injecter le toast dans le DOM
  injecterHTML() {
    const gabarit = `<div data-toast>${this._message}</div>`;

    this._conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    this._elementHTML = this._conteneurHTML.lastElementChild;

    this._elementHTML.addEventListener("click", this.cacher.bind(this));
    setTimeout(this.cacher.bind(this), 5000);
  }
}

export default Toast;
