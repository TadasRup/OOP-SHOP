class Parduotuve {
    constructor(pavadinimas, valiuta) {
      this.pavadinimas = pavadinimas;
      this.valiuta = valiuta;
      this.inventorius = [];
      this.pelnoAtaskaita = [];
    }
  
    prisistatyti() {
      console.log(`Sveiki atvykę į ${this.pavadinimas}!`);
    }
  
    nustatytiValiuta(valiuta) {
      this.valiuta = valiuta;
      console.log(`Parduotuvė prekiauja ${this.valiuta} valiuta.`);
    }
  
    papildytiInventoriu(preke) {
      this.inventorius.push(preke);
      console.log(`Prekė ${preke.pavadinimas} pridėta į inventorius.`);
    }
  
    parduotiPreke(prekesId, kiekis) {
    }
  
    atnaujintiPelnoAtaskaita(preke, kiekis) {

    }
  
    pasalintiPreke(prekesId) {
      const indeksas = this.inventorius.findIndex((p) => p.id === prekesId);
  
      if (indeksas === -1) {
        console.log(`Prekė su ID ${prekesId} nerasta.`);
        return;
      }
  
      const pavadinimas = this.inventorius[indeksas].pavadinimas;
      this.inventorius.splice(indeksas, 1);
      console.log(`Prekė ${pavadinimas} pašalinta iš inventorius.`);
    }
  
    gautiInventoriu() {
      return this.inventorius;
    }
    gautiPelnoAtaskaita() {
        return this.inventorius.map((preke) => {
          const pelnoAtaskaitosPreke = this.pelnoAtaskaita.find((item) => item.prekesPavadinimas === preke.pavadinimas);
            return {
            prekesPavadinimas: preke.pavadinimas,
            isigytasKiekis: pelnoAtaskaitosPreke ? pelnoAtaskaitosPreke.isigytasKiekis : 200,
            parduotasKiekis: pelnoAtaskaitosPreke ? pelnoAtaskaitosPreke.parduotasKiekis : 100,
            ismestasKiekis: pelnoAtaskaitosPreke ? pelnoAtaskaitosPreke.ismestasKiekis : 0,
            likutis: preke.kiekis,
            prekesPelnas: pelnoAtaskaitosPreke ? pelnoAtaskaitosPreke.prekesPelnas : 300,
            prekesBalansas: pelnoAtaskaitosPreke ? pelnoAtaskaitosPreke.prekesBalansas : 100
          };
        });
      }      
  }

  
  
  export { Parduotuve };
  