//pour etre sur que tous les elemnets de la page bien telecharger
const lengthMax = 40;
const inseteErr = document.querySelector(".form-input");
// pour insérer dedans les inputs de from
const persone = {
  nom: "",
  prenom: "",
  email: "",
  dateDeNaissance: Date,
  address: {
    nomRue: "",
    numeroRue: "",
    cp: "",
    ville: "",
  },
};
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
    getPrenom();
    getDate();
    getmEmail();
    getNomRue();
    getNumeroRue();
    getCp();
    getVille();
    console.log(persone);
  });
}

// get le nom apers le tester
const getNom = () => {
  const nom = document.querySelector("#nom");
  if (
    !(nom.value.charAt(0).toUpperCase() == nom.value.charAt(0)) ||
    !(lengthMax > nom.value.length) ||
    !nom.value.trim()
  ) {
    const nomErr = document.querySelector("#nomErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText =
      "le nom doit etre de 2 caractères minimum et 40 maximum";
    nomErr.appendChild(sepanErr);
    injecterMsgErr(nom, sepanErr);
    return false;
  } else {
    persone.nom = nom.value;
  }
};

// get le nom apers le tester
const getPrenom = () => {
  const prenom = document.querySelector("#prenom");
  if (
    !(prenom.value.length > 2) ||
    !(lengthMax > prenom.value.length) ||
    !prenom.value.trim()
  ) {
    const prenomErr = document.querySelector("#prenomErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText =
      "le prenom doit etre de 2 caractères minimum et 40 maximum";
    prenomErr.appendChild(sepanErr);
    injecterMsgErr(prenom, sepanErr);
  } else {
    persone.prenom = prenom.value;
  }
};

// get le nom apers le tester

function getDate() {
  const dateDeNaissance = document.querySelector("#date_de_naissance");
  const dateDeNaissanceFromat = new Date(dateDeNaissance.value);
  const date18YrsAgo = new Date();
  date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 18);
  //alert(date18YrsAgo);
  // alert(dateDeNaissanceFromat);
  if (
    dateDeNaissanceFromat.getFullYear() <= date18YrsAgo.getFullYear() &&
    dateDeNaissanceFromat.getMonth() >= date18YrsAgo.getMonth() &&
    dateDeNaissanceFromat.getDate() >= date18YrsAgo.getDate()
  ) {
    persone.dateDeNaissance = dateDeNaissance.value;
  } else {
    const dateErr = document.querySelector("#dateErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "vous devez être majeur au jour de linscription";
    dateErr.appendChild(sepanErr);
    injecterMsgErr(dateDeNaissance, sepanErr);
  }
}

// get le nom apers le tester

const getmEmail = () => {
  const email = document.querySelector("#email");
  if (regExEmail(email.value)) {
    persone.email = email.value;
  } else {
    const emailErr = document.querySelector("#emailErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "vous deovez ecreir un bon fromat de le e-mail";
    emailErr.appendChild(sepanErr);
    injecterMsgErr(email, sepanErr);
  }
};

// regex test s'il ya un point et @ dans le e-email
const regExEmail = (email) => {
  return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
};

// functions de l'address pour ne pas etre vide our null
const getNomRue = () => {
  const nomRue = document.querySelector("#nomRue");
  if (nomRue.value == null || !nomRue.value.trim()) {
    const nomRueErr = document.querySelector("#nomRueErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "Ce champ est obligatoire, vous devez le remplir.";
    nomRueErr.appendChild(sepanErr);
    injecterMsgErr(nomRue, sepanErr);
  } else {
    persone.address.nomRue = nomRue.value;
  }
};

const getNumeroRue = () => {
  const numeroRue = document.querySelector("#numeroRue");
  if (numeroRue.value == null || !numeroRue.value.trim()) {
    const numeroRueErr = document.querySelector("#numeroRueErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "Ce champ est obligatoire, vous devez le remplir.";
    numeroRueErr.appendChild(sepanErr);
    injecterMsgErr(numeroRue, sepanErr);
  } else {
    persone.address.numeroRue = numeroRue.value;
  }
};

const getCp = () => {
  const cp = document.querySelector("#cp");
  if (cp.value == null || !cp.value.trim()) {
    const cpErr = document.querySelector("#cpErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "cpErr";
    cpErr.appendChild(sepanErr);
    injecterMsgErr(cp, sepanErr);
  } else {
    persone.address.cp = cp.value;
  }
};

const getVille = () => {
  const ville = document.querySelector("#ville");
  if (ville.value == null || !ville.value.trim()) {
    const villeErr = document.querySelector("#villeErr");
    const sepanErr = document.createElement("span");
    sepanErr.innerText = "Ce champ est obligatoire, vous devez le remplir.";
    villeErr.appendChild(sepanErr);
    injecterMsgErr(ville, sepanErr);
  } else {
    persone.address.ville = ville.value;
  }
};

// Fonction pour afficher une msg de err
function injecterMsgErr(inputTag, sepanErrElmenet) {
  inputTag.className += " fromBorderErr";
  supprimeMsgErr(inputTag, sepanErrElmenet);
}

//supprimer msg de err lorsque on focus sur l'input
function supprimeMsgErr(inputTag, sepanErrElmenet) {
  inputTag.addEventListener("focus", (event) => {
    inputTag.classList.remove("fromBorderErr");
    sepanErrElmenet.remove();
  });
}
