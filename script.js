// Navigation
function afficher(id) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}
//message
let texte =document.getElementById("msg");
let bouton =document.getElementById('btn');
bouton.addEventListener("click",function(){
  texte.texteContent="Bienvenue dans le cours de js 🎉'";
})




// Pair ou impair
function verifierPair() {
  let n = document.getElementById("nbPair").value;
  let res = (n === "") ? "Veuillez entrer un nombre ⚠️"
          : (n % 2 === 0) ? `${n} est Pair ✅`
          : `${n} est Impair ❌`;
  document.getElementById("resPair").textContent = res;
}

// Table de multiplication
function genererTable() {
  let n = document.getElementById("nbMulti").value;
  let zone = document.getElementById("resMulti");
  zone.innerHTML = "";
  if (n === "") { zone.innerHTML = "<li>Veuillez entrer un nombre ⚠️</li>"; return; }
  for (let i = 1; i <= 10; i++) {
    zone.innerHTML += `<li>${n} x ${i} = ${n * i}</li>`;
  }
}

// Majorité
function verifierAge() {
  let age = document.getElementById("age").value;
  let res = (age === "") ? "Veuillez entrer un âge ⚠️"
          : (age >= 18) ? "Tu es majeur ✅"
          : "Tu es mineur ❌";
  document.getElementById("resAge").textContent = res;
}

// Calculatrice
function calculer() {
  let n1 = parseFloat(document.getElementById("calc1").value);
  let n2 = parseFloat(document.getElementById("calc2").value);
  let op = document.getElementById("op").value;
  let res;
  if (isNaN(n1) || isNaN(n2)) {
    res = "Veuillez entrer deux nombres ⚠️";
  } else {
    switch(op) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": res = n2 !== 0 ? n1 / n2 : "Division impossible ❌"; break;
    }
  }
  document.getElementById("resCalc").textContent = "Résultat : " + res;
}

// Fruits
function afficherFruits() {
  let fruits = ["Pomme", "Banane", "Orange", "Mangue", "Ananas"];
  let zone = document.getElementById("resFruits");
  zone.innerHTML = "";
  fruits.forEach(fruit => zone.innerHTML += `<li>${fruit}</li>`);
}

// Plus grand nombre
function trouverMax() {
  let n1 = parseFloat(document.getElementById("max1").value);
  let n2 = parseFloat(document.getElementById("max2").value);
  let n3 = parseFloat(document.getElementById("max3").value);
  let res = (isNaN(n1) || isNaN(n2) || isNaN(n3)) 
          ? "Veuillez entrer les 3 nombres ⚠️"
          : "Le plus grand est : " + Math.max(n1, n2, n3);
  document.getElementById("resMax").textContent = res;
}

// Compter
function compter() {
  let zone = document.getElementById("resCompter");
  zone.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    zone.innerHTML += `<li>${i}</li>`;
  }
}

// Afficher par défaut la première appli
afficher('app1');
