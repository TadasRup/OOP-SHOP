class Preke {
    static nextId = 1;
  
    constructor(pavadinimas, isigijimoKaina, pardavimoKaina, kiekis) {
      this.id = Preke.nextId++;
      this.pavadinimas = pavadinimas;
      this.isigijimoKaina = isigijimoKaina;
      this.pardavimoKaina = pardavimoKaina;
      this.kiekis = kiekis;
    }
  }
  
  export { Preke };
  