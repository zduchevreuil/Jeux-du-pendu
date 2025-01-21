const motEL = document.getElementById("mot");
const mauvaisesLettres = document.getElementById("mauvaises-lettres");
const rejouerBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-contenant");
const notification = document.getElementById("notification-contenant");

const messageFinal = document.getElementById("message-final");

const figurePartie = document.querySelectorAll(".figure-partie");

const mots = [
  "abricot",
  "abeille",
  "abricotier",
  "accord",
  "accident",
  "acteur",
  "action",
  "adulte",
  "affaire",
  "agence",
  "agrume",
  "aigle",
  "aiguille",
  "aileron",
  "ailes",
  "aimant",
  "airelle",
  "album",
  "algue",
  "alignement",
  "allumette",
  "amande",
  "amateur",
  "ambition",
  "ambulance",
  "amitié",
  "amour",
  "amphibien",
  "ananas",
  "ancien",
  "ancre",
  "anémone",
  "ange",
  "animal",
  "animation",
  "anneau",
  "anniversaire",
  "antilope",
  "apiculture",
  "appareil",
  "appartement",
  "aquarium",
  "arbre",
  "archipel",
  "architecte",
  "ardoise",
  "argent",
  "armoire",
  "armure",
  "arrière",
  "arrogance",
  "artichaut",
  "article",
  "ascenseur",
  "asperge",
  "astéroïde",
  "astuce",
  "athlète",
  "atome",
  "attache",
  "attitude",
  "auberge",
  "aurore",
  "avalanche",
  "avatar",
  "avenue",
  "aventure",
  "avion",
  "aviron",
  "avis",
  "avocat",
  "avril",
  "axiome",
  "azimut",
  "babouche",
  "bactéries",
  "bagage",
  "bagarre",
  "baguette",
  "baie",
  "bain",
  "balai",
  "balcon",
  "ballon",
  "bambou",
  "banane",
  "banque",
  "barbecue",
  "barbier",
  "barque",
  "barrage",
  "barre",
  "basique",
  "basilique",
  "basket",
  "bataille",
  "bateau",
  "batterie",
  "bazar",
  "beauté",
  "beige",
  "bélier",
  "belle",
  "bénitier",
  "berceau",
  "berger",
  "berline",
  "béton",
  "bijou",
  "bille",
  "billard",
  "biologie",
  "biscuit",
  "bison",
  "blague",
  "blanc",
  "blé",
  "blessure",
  "blocage",
  "blouse",
  "bocal",
  "bois",
  "boisson",
  "bolide",
  "bombe",
  "bonbon",
  "bonheur",
  "bonjour",
  "bonne",
  "bordure",
  "bosquet",
  "boucher",
  "boucle",
  "bougie",
  "boule",
  "boutique",
  "bouton",
  "bracelet",
  "brasserie",
  "bravo",
  "bretelle",
  "brique",
  "broderie",
  "brouillard",
  "brosse",
  "broyeur",
  "bruit",
  "brume",
  "brun",
  "buffet",
  "bureau",
  "buse",
  "busque",
  "cabane",
  "cabinet",
  "cactus",
  "cadavre",
  "cadeau",
  "cadence",
  "cadran",
  "café",
  "caillou",
  "caisse",
  "calamar",
  "calèche",
  "calendrier",
  "calme",
  "camarade",
  "camion",
  "campagne",
  "camping",
  "canapé",
  "canard",
  "canyon",
  "capable",
  "capitaine",
  "capitale",
  "capsule",
  "carapace",
  "caravane",
  "carbone",
  "carcasse",
  "carence",
  "caresse",
  "carotte",
  "carré",
  "carte",
  "cascade",
  "casino",
  "casque",
  "casserole",
  "castor",
  "catalogue",
  "cathédrale",
  "cause",
  "cavale",
  "cave",
  "caverne",
  "caviar",
  "ceinture",
  "célibataire",
  "cellule",
  "centaure",
  "cercle",
  "cerf",
  "cerise",
  "cerisier",
  "cerveau",
  "chagrin",
  "chaîne",
  "chair",
  "chalet",
  "chaloupe",
  "chambre",
  "champ",
  "chance",
  "chanson",
  "chant",
  "chapeau",
  "chaque",
  "charge",
  "charisme",
  "chariot",
  "charme",
  "charrette",
  "chasseur",
  "château",
  "chaton",
  "chaud",
  "chauve",
  "chemin",
  "cheminée",
  "cheval",
  "cheville",
  "chiffon",
  "chimère",
  "chimie",
  "chiot",
  "chocolat",
  "choix",
  "chose",
  "cible",
  "ciel",
  "cigale",
  "cigarette",
  "ciment",
  "cinéma",
  "cire",
  "cirque",
  "citadelle",
  "citron",
  "citrouille",
  "clair",
  "clan",
  "clavier",
  "client",
  "climat",
  "clinique",
  "cloche",
  "clou",
  "club",
  "cochon",
  "cœur",
  "coiffe",
  "colibri",
  "colis",
  "colline",
  "colonie",
  "colonne",
  "combat",
  "comète",
  "commande",
  "commerce",
  "compas",
  "complexe",
  "complot",
  "comptoir",
  "concept",
  "concert",
  "concours",
  "condor",
  "confettis",
  "conflit",
  "congé",
  "conifère",
  "conjugaison",
  "contact",
  "conte",
  "contrôle",
  "convoi",
  "corde",
  "corne",
  "corniche",
  "corps",
  "corsaire",
  "cosmos",
  "coton",
  "coude",
  "couleur",
  "coupable",
  "couronne",
  "courrier",
  "course",
  "coussin",
  "couture",
  "couvercle",
  "coyote",
  "crabe",
  "cravate",
  "crayon",
  "crédit",
  "crépuscule",
  "crevette",
  "cri",
  "crise",
  "crochet",
  "croissant",
  "croix",
  "croquer",
  "cuisine",
];

// Sélectionner un mot pour jouer

let motSelectionne = mots[Math.floor(Math.random() * mots.length)];

//console.log(motSelectionne);

const bonnesLettresArr = [""];
const mauvaisesLettresArr = [""];

//Afficher le mot caché.

function afficherMot() {
  motEL.innerHTML = ` 
      ${motSelectionne
        .split("")
        .map(
          (lettre) => `
                <span class="lettre">
                  ${bonnesLettresArr.includes(lettre) ? lettre : ""}
                </span>
            `
        )
        .join("")}

  `;

  const motinterne = motEL.innerText.replace(/\n/g, "");

  console.log(motEL.innerText, motinterne);

  if (motinterne === motSelectionne) {
    messageFinal.innerText = "Bravo ! Tu as gagner";
    popup.style.display = "flex";
  }
}

//Mauvaises lettres

function updateMauvaiseLettresEL() {
  // afficher mauvaises lettres
  mauvaisesLettres.innerHTML = `
     ${mauvaisesLettresArr.map((lettre) => `<span>${lettre}</span>`)}
  `;
  // afficher le bonhomme
  //Verifier si on a perdu
}

//afficher la notification

function afficherNotification() {
  notification.classList.add("afficher");
  setInterval(() => {
    notification.classList.remove("afficher");
  }, 2000);
}

//Events listeners

window.addEventListener("keydown", (e) => {
  //console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const lettre = e.key;
    //console.log(lettre);
    if (motSelectionne.includes(lettre)) {
      if (!bonnesLettresArr.includes(lettre)) {
        bonnesLettresArr.push(lettre);

        afficherMot();
      } else {
        afficherNotification();
      }
    } else {
      if (!mauvaisesLettresArr.includes(lettre)) {
        mauvaisesLettresArr.push(lettre);

        updateMauvaiseLettresEL();
      } else {
        afficherNotification();
      }
    }
  }
});

afficherMot();
