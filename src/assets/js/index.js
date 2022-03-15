//pour etre sur que tous les elemnets de la page bien telecharger
const lengthMax = 40;
const inseteErr = document.querySelector(".form-input");

window.addEventListener("DOMContentLoaded", () => {
  main();
});

function main() {
  const btnSubmit = document.querySelector("#btnSubmit");

  // on cliqe on test les input de la from et on les recuperer
  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const body = document.querySelector("#bodybg");
     getNom();
     //getPrenom();
    //getDate();
    // getmEmail();
    // getNomRue();
     //getNumeroRue();
    // getCp();
    //getVille();
  });
}

// get le nom apers le tester
const getNom = () => {
  const nom = document.querySelector("#nom");
  if (
    (!(nom.value.charAt(0).toUpperCase() == nom.value.charAt(0)) ||
      !(lengthMax > nom.value.length)) ||
    !nom.value.trim()
  ) {
    const nomErr = document.querySelector("#nomErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText =
      "le nom doit etre de 2 caractères minimum et 40 maximum";
    nomErr.appendChild(sepanErr);
    document.querySelector("#nom").className += " fromBorderErr";
    return false;
  } else {
    return alert(nom.value);
  }
};

// get le nom apers le tester
const getPrenom = () => {
  const prenom = document.querySelector("#prenom");
  if ( !(prenom.value.length > 2) || !(lengthMax > prenom.value.length) ||
    !prenom.value.trim()) {
    const prenomErr = document.querySelector("#prenomErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText =
    "le prenom doit etre de 2 caractères minimum et 40 maximum";
    prenomErr.appendChild(sepanErr);
    document.querySelector("#prenomErr").className += " formErr";
    return false;
  } else {
    return alert(prenom.value);
  }
};

// get le nom apers le tester

function getDate() {
  const dateDeNaissance = document.querySelector("#date_de_naissance").value;
  const dateDeNaissanceFromat = new Date(dateDeNaissance);
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
   alert(date18YrsAgo);
  // alert(dateDeNaissanceFromat);
  if (
    dateDeNaissanceFromat.getFullYear() <= date18YrsAgo.getFullYear() &&
    dateDeNaissanceFromat.getMonth() >= date18YrsAgo.getMonth() &&
    dateDeNaissanceFromat.getDate() >= date18YrsAgo.getDate()
  ) {
    return console.log(dateDeNaissance);
  } else {
    const dateErr = document.querySelector("#dateErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "vous deovez être majeur au jour de linscription";
    dateErr.appendChild(sepanErr);
    document.querySelector("#dateErr").className += " formErr";
    return false;
  }
  // return alert("non");
}

// get le nom apers le tester

const getmEmail = () => {
  const email = document.querySelector("#email").value;
  if (regExEmail(email)) {
    return console.log(email);
  } else {
    const emailErr = document.querySelector("#emailErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "vous deovez ecreir un bon fromat de le e-mail";
    emailErr.appendChild(sepanErr);
    document.querySelector("#emailErr").className += " formErr";
    return false;
  }
};

// regex test s'il ya un point et @ dans le e-email
const regExEmail = (email) => {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
};

// functions de l'address pour ne pas etre vide our null
const getNomRue = () => {
  const nomRue = document.querySelector("#nomRue").value;
  if (nomRue == null || !nomRue.trim()) {
    const nomRueErr = document.querySelector("#nomRueErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "nomRueErr";
    nomRueErr.appendChild(sepanErr);
    document.querySelector("#nomRueErr").className += " formErr";
    return false;
  } else {
    return alert("nom rue non valide");
  }
};

const getNumeroRue = () => {
  const numeroRue = document.querySelector("#numeroRue").value;
  if (numeroRue == null || !numeroRue.trim()) {
    const numeroRueErr = document.querySelector("#numeroRueErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "numeroRueErr";
    numeroRueErr.appendChild(sepanErr);
    document.querySelector("#numeroRueErr").className += " formErr";
    return false;
  } else {
    return alert(numeroRue);
  }
};

const getCp = () => {
  const cp = document.querySelector("#cp").value;
  if (cp == null || !cp.trim()) {
    const cpErr = document.querySelector("#cpErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "cpErr";
    cpErr.appendChild(sepanErr);
    document.querySelector("#cpErr").className += " formErr";
    return false;
  } else {
    return alert("valide cp");
  }
};

const getVille = () => {
  const ville = document.querySelector("#ville").value;
  if (ville == null || !ville.trim()) {
    const villeErr = document.querySelector("#villeErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "villeErr";
    villeErr.appendChild(sepanErr);
    document.querySelector("#villeErr").className += " formErr";
    return false;
  } else {
    return alert(" valide ville");
  }
};
