import { Parduotuve } from "./js/Parduotuve.js";
import { Preke } from "./js/Preke.js";

console.clear();

const manoParduotuve = new Parduotuve("Mano Parduotuvė", "EUR");
manoParduotuve.prisistatyti(); 

manoParduotuve.nustatytiValiuta("EUR"); 

const preke1 = new Preke("guminukai", 1, 3, 100);
const preke2 = new Preke("sokoladas", 1, 3, 100);

manoParduotuve.papildytiInventoriu(preke1); 
manoParduotuve.papildytiInventoriu(preke2); 

console.log(manoParduotuve.gautiInventoriu()); 

manoParduotuve.parduotiPreke(1, 3); 
manoParduotuve.parduotiPreke(2, 5); // Parduota 5 vnt. prekės sokoladas

console.log(manoParduotuve.gautiPelnoAtaskaita()); // Print the profit report

