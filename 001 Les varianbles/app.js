let maVariableLet = 1;
const maVariableconst = 2;

maVariableLet = 3;

console.log(maVariableLet);

// les type de variable possible :
// - Number : pour les nombres
// - String : pour les chaines de character
// - boolean : pour les valeurs booléennes (true ou false)
// - Object : pour les object
// - Function : pour les fonction
// - Null : pour les variable non initialisées
// - symbol : pour les valeur symbolique
// - BigInt : pour les grand nombre entier
let maVariableNumber = 1;
let maVariablestring = "bonjour";
let maVariableboolean = true;
let maVariableObject = { name: "Jean", age: 30 };
let maVariableFonction = function () {
  return "Je suis une fonction";
};
let maVariableUndefined;
let maVariableNull = null;
let maVariableSymbol = symbol("symbol");
let maVariablebigInt = 1234567890123456789012345678901234567890n;
let maVariablePI = Math.PI;

// viser un element dans le html
// - viser avec une class
document.getElementsByClassName("");
// - viser avec un ID
document.getElementById("");
// - viser un element en metant (# : ID, . : Class)
document.querySelector("");
// - viser tout les element que tu ecrit dans ""
document.querySelectorAll("");
