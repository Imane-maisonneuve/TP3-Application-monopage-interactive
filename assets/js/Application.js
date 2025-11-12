class Application {
  #listEvenementsHTML;
  constructor() {
    this.#listEvenementsHTML = document.querySelector("[data-list-event]");
    this.rechercherEvenements();
  }
  async rechercherEvenements() {
    const requete = await fetch(
      "https://montreal-prod.storage.googleapis.com/resources/35307457-a00f-4912-9941-8095ead51f6e/evenements.geojson?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=test-datapusher-delete%40amplus-data.iam.gserviceaccount.com%2F20251112%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251112T163408Z&X-Goog-Expires=604800&X-Goog-SignedHeaders=host&x-goog-signature=53151e344d44a09ad9f79accb647f6f09de9d7466e818ac9d38a721c3559057adb649b4e78178e52bc6f9d323f2dbe64539aeaf4c81e59480eb0a13b6274d9f05acbc284f0c6316573c6330eec2d385153e991e0ee034d47360953099ff5f354118929274f19b11b6955f5813f2831b71e20f0497a930da73e4214a18c487fcd3948a63d9f62e2776dbe29ba0fdc036176548a53f6fdbddf858da3163100d68ce42d9e0b827fc2c6d3fbea159d70850a0ec41883999a1b9179831706549059d9f41d52a26b23f30a8327b9dc63adab43023436239d8c31a26e518dc1c41a63f03866ea75ef99e7055f7d86cdc0c4c82b57f60c5d490df9e747891de1592a283e"
    );
    const reponse = await requete.json();
    console.log(reponse);
  }
}
export default Application;
