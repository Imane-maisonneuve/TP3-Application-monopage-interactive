import Toast from "./Toast.js";

class ToastErreur extends Toast {
  constructor(message) {
    super(message);
  }

  injecterHTML() {
    const gabarit = `<div class="fixed z-500 mx-auto flex justify-center items-center p-4 bg-red-500 text-amber-50 top-0 left-0 right-0" data-toast>${this.message}</div>`;

    this._conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    this._elementHTML = this._conteneurHTML.lastElementChild;

    this._elementHTML.addEventListener("click", this.cacher.bind(this));
    setTimeout(this.cacher.bind(this), 2000);
  }
}

export default ToastErreur;
